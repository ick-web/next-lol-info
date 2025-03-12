export async function GET(){
    const apikey: string | undefined = process.env.RIOT_API_KEY
    if(!apikey) throw new Error('Riot API key is missing!!!')
}