module.exports = {
    app: {
        token: 'MTAzOTkwMjk0OTQzMTg1NzIwMg.GG0Ky_.th5DiU1FDTkNOR0mWY_8hdwDJhMBJfGj_9SNfw',
        playing: 'by BlackWool',
        global: true,
        guild: 'XXX'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
