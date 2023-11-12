const axios = require("axios")
const cheerio = require('cheerio');


async function getChannels() {
    const { data } = await axios.get("https://channels.mayapur.tv/channels/")
    return data
}

module.exports = getChannels

