export default function calculate(req, res) {
    res.statusCode = 200;
    const { bill, tipPercent, people } = req.query;


    const calTotal = function () {
        let result = 0;
        result = (bill * (tipPercent / 100) + bill) / people;
        return result;
    };

    let result = {
        result: false
    }

    if (bill && tipPercent && people) {
        const total = calTotal();
        result = {
            result: true,
            total: calTotal(),
            amount: total / people
        }
    }

    res.send(JSON.stringify(result));
}

