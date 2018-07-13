import React, {Component, Fragment} from 'react';
import AWS from 'aws-sdk';

const uuidv4 = require('uuid/v4');

const globalUUID = uuidv4()

var shortid = require('shortid');

const doc = new AWS.DynamoDB.DocumentClient({
    region: 'eu-west-1',
    accessKeyId: "AKIAI62YYECVOHOSQH3Q",
    secretAccessKey: "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",
})
class Third extends Component {

    state = {
        disabled: false,
        count: 0,
        pause: false,
        userCount: undefined,
    }

    componentDidMount() {
        doc.update({
            TableName: 'config',
            Key: 'total_count',
            UpdateExpression: "ADD ronan_value :q",
            ReturnValues: "ALL_NEW",
            ExpressionAttributeValues: {":q": 1}

        }).promise().then(res => console.log(res)).catch(console.log)
    }

    handleClick = async (arg) => {
        this.setState({disabled: true}, () => setTimeout(() => this.setState({disabled: false}), 0))

        doc.put({
            TableName: 'results',
            Item: {
                key: uuidv4(),
                turker: "INTPHYS_TONIO_u1c" + globalUUID.substring(0,8),
                result: arg,
                image: 'hello',
            }
        }).promise()
        this.setState({
            count: this.state.count + 1,
        }, () => {
            if(this.state.count % 10 === 0) {
                this.setState({pause: true})
            }
        })




    };
    render() {
        console.log(typeof globalUUID, globalUUID, this.state.count)
        if(this.state.count >= 2){
            return(
                <div className="slide" id="finished">
                    <p className="block-text"> The experiment is over - thank you for your participation! <br/><br/>Don't
                        forget to fill the HIT home page with your Mechanical Turk Worker ID and the following code:</p>
                    <p ><span id="code">INTPHYS_TONIO_u1c{globalUUID.substring(0,8)}</span></p>
                </div>)
        }
        else if(!this.state.pause)
        {
            return (
            <div className="slide" id="stage">
                <div align="center">
                    <button type="button" onClick>Replay</button>
                </div>

                <button disabled={this.state.disabled} onClick={() => this.handleClick(1)}>1</button>
                <button disabled={this.state.disabled} onClick={() => this.handleClick(2)}>2</button>

                <div style={{margin: '100px'}}>
                    {this.state.count + ' left'}



                </div>
         </div>);

        }
        else {
            return (<Fragment>
                <div className="slide" id="pause">

                    <br/><br/><p align="center">You have done: <span id="n_trial">{this.state.count}</span>/<span id="n_test">80</span></p><br/>
                    <p align="center">To continue, click on Next</p><br/>
                    <table align="center">
                        <td align="center">
                            <button onClick={() => this.setState({pause: false})}>Next</button>
                        </td>
                    </table>

                </div>

            </Fragment>);

        }



        }
        }

        export default Third;
