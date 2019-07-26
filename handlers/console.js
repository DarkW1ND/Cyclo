module.exports = (client) => {
    let prompt = process.openStdin()
    prompt.addListener("data", res => {
        let x = res.toString().trim().split(/ +/g)
            client.channels.get("604237655198400523").send(x.join(" "));
        });
    }
