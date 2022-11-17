//The Module
module.exports = async (client, thread) => {
    try{
        if(thread.joinable && !thread.joined){
            await thread.join();
        }
    }catch (e){
        console.log(String(e).grey)
    }
}
/**
 * @INFO
 * Bot Coded by Rin#4797 | https://rinzxx.ga
 * @INFO
 * Work for Milrato Development | https://rinzxx.ga
 * @INFO
 * Please mention him / Milrato Development, when using this Code!
 * @INFO
 */
