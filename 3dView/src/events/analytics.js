const measurement_id = 'G-3F6TZW1J7X'
const api_secret = 'NLQ1rcdtS2O00tlYB2vSXg'
let userID = generateRandomString(5);

function generateRandomString(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export async function GTMevent(category, name) {
    fetch('https://www.google-analytics.com/mp/collect?api_secret=NLQ1rcdtS2O00tlYB2vSXg&measurement_id=G-3F6TZW1J7X', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },                                                                                                                                                     
        body: JSON.stringify({ "client_id": '121245j', "user_id": '121245j', "non_personalized_ads": true, "events": [{ "name": "Clique_", "params": { "items": [], "categoria_": category, "item_": name } }] })
    })

    timeout();
}

export async function GTMsessionStart() {
    fetch('https://www.google-analytics.com/mp/collect?api_secret=NLQ1rcdtS2O00tlYB2vSXg&measurement_id=G-3F6TZW1J7X', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "client_id": '121245j',
            "user_id": '121245j',
            "non_personalized_ads": false,
            "events": [
                {
                    "name": "session_start_"
                }
            ]
        })
    })

}

function timeout() {
    setTimeout(async function () {
        GTMtimeSpent()
        timeout();
    }, 10000);
}

export async function GTMtimeSpent() {

    fetch('https://www.google-analytics.com/mp/collect?api_secret=NLQ1rcdtS2O00tlYB2vSXg&measurement_id=G-3F6TZW1J7X', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "client_id": '121245j', "user_id": '121245j', "non_personalized_ads": true, "events": [{ "name": "timespend", "params": { "items": [], "seconds": 10 } }] })
    })

}

