import * as React from "react";
import { FormValidator, rules } from "maishu-dilu-react";

interface State {
    username?: string,
    email?: string,
    address?: string,
}

export default class extends React.Component<{}, State>{
    private formValidator: FormValidator;

    constructor(props: any) {
        super(props);

        this.formValidator = new FormValidator();
    }
    submit() {
        this.formValidator.check();
    }
    render() {
        let { username, email, address } = this.state || {};
        return <div className="container">
            <h2>DEMO</h2>
            <div className="horizontal">
                <div className="form-group">
                    <input className="form-control" placeholder="请输入用户名" value={username || ""}
                        onChange={e => {
                            this.setState({ username: e.target.value });
                        }} />
                    {this.formValidator.field(username, [rules.required("请输入用户名")])}
                </div>
                <div className="form-group">
                    <input className="form-control" placeholder="请输入邮箱" value={email || ""}
                        onChange={e => {
                            this.setState({ email: e.target.value });
                        }} />
                    {this.formValidator.field(email, [rules.required("请输入邮箱"), rules.email("请输入正确的邮箱地址")])}
                </div>
                <div className="form-group">
                    <input className="form-control" placeholder="请输入地址" value={address || ""}
                        onChange={e => {
                            this.setState({ address: e.target.value });
                        }} />
                    {this.formValidator.field(address, [
                        rules.custom((value) => {
                            return value == "aaa";
                        }, "地址不正确")
                    ])}
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" onClick={() => this.submit()}>
                        提交数据
                    </button>
                </div>
            </div>
        </div>
    }
}