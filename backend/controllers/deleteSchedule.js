import cron from 'node-cron'
import supabase from '../config/supabase.js';

const deleteOldTodos = async () => {
    try {
        const oneWeekAgo = new Date()
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)

        const { data, error } = await supabase.from('todolist').delete().lt('created_at', oneWeekAgo.toISOString())

        if (error) {
            console.error('❌ Error deleting old todos:', error.message);
        } else {
            console.log(`🧹 Deleted ${data?.length || 0} old todos.`);
        }
    } catch (error) {
        console.log('Error in scheduled deletion', error.message)
    }
}
cron.schedule('0 0 * * *', deleteOldTodos) // Runs every day at midnight 