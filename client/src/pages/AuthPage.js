import React, {useState} from 'react'

export const AuthPage = () => {
    const [form, setForm] = useState({
        email: '', password: ''
    })

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1 className="white-text center">link shortening</h1>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                    <span className="card-title">authorization</span>
                    <div>
                        <div className="input-field">
                            <input
                             placeholder="enter email"
                             id="email"
                             type="text"
                             name="email"
                             className="green-input"
                             onChange={changeHandler}
                            />
                            <label htmlFor="email">email</label>
                        </div>
                        <div className="input-field">
                            <input
                             placeholder="enter password"
                             id="password"
                             type="password"
                             name="password"
                             className="green-input"
                             onChange={changeHandler}
                            />
                            <label htmlFor="email">password</label>
                        </div>
                    </div>
                    </div>
                    <div className="card-action">
                        <button className="btn green " style={{marginRight: 10}} >entrance</button>
                        <button className="btn grey lighten-1">registration</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
