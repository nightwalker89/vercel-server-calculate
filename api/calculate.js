export default function calculate(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );
    res.statusCode = 200;

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return
    }

    let { bill, tipPercent, people } = req.query;


    const calTotal = function () {
        let result = 0;
        result = (bill * (tipPercent / 100) + bill) / people;
        return result;
    };

    const calAmount = function () {
        let result = 0;
        result = (bill * (tipPercent / 100)) / people;
        return result;
    };

    let result = {
        result: false
    }

    bill = parseFloat(bill);
    tipPercent = parseFloat(tipPercent);
    people = parseInt(people);

    if (bill && !isNaN(tipPercent) && people) {


        result = {
            result: true,
            total: calTotal(),
            amount: calAmount()
        }
    }

    res.send(JSON.stringify(result));
}

