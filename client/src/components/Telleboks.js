import { useState } from "react";

function Telleboks() {
    // Reacts 'useState'-hook; setter startverdi på 'num' til '0'. 'setNum' oppdaterer 'num'
    let [num, setNum] = useState(0);
    let incNum = () => { // Arrow-funksjon; øker verdien dersom den er mindre enn x
        if (num < 10) {
            setNum(Number(num) + 1);
        }
    };
    let decNum = () => { // Arrow-funksjon; senker verdien dersom den er mindre enn x
        if (num > 0) {
            setNum(num - 1);
        }
    };
    let handleChange = (e) => { // Handler; oppdaterer verdien til 'num' gjennom 'setNum'
        setNum(e.target.value);
    };

    return (
        <div className="form-group"> {/* "form-group" brukes i Cards for ikke å føkke det til */}
            <div className="input-group">
                <div className="input-group-prepend">
                    <button className="btn btn-outline-danger" type="button" onClick={decNum}>
                        -
                    </button>
                </div>
                <input
                    type="text"
                    className="form-control"
                    value={num}
                    onChange={handleChange}
                />
                <div className="input-group-append">
                    <button className="btn btn-outline-success" type="button" onClick={incNum}>
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Telleboks;