export default function calculate(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.statusCode = 200;
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

