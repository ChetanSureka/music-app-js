import { Innertube } from 'youtubei.js';


// // only id
// const videos = async () => {
//     const video = await youtube.getBasicInfo("Klq9oovd6iY")
//     console.log(video)
// }
// // videos()

// // Search
// const searchResults = async () => {
//     const results = await youtube.search("Animal")
//     console.log(results)
// }
// // searchResults()

// get Music data
export const musicData = async (query: string) => {
    const youtube = await Innertube.create();
    const data = await youtube.music.search(query)
    return data
}

// get stream url
export const getStreamData = async (id: string) => {
    const youtube = await Innertube.create();
    const info = await youtube.getBasicInfo(id)
    const url = info.streaming_data?.formats[0].decipher(youtube.session.player);
    console.info("Playback url: ", url);
    // return data
    return url
}

// get Home feed
export const getFeed = async () => {
    const youtube = await Innertube.create();
    const recommendation = youtube.getHomeFeed()
    console.log("recommendation: ", recommendation)
    return recommendation
}