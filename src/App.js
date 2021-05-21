import React, { Component } from 'react'
import axios from 'axios'
import './app.css'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
export default class App extends Component {

    show = () => {
        // console.log(this.te1.value)
        if(this.te1.value.trim() === '') {
            alert('请输入题目')
        }else {
            const val = this.te1.value
            const type = 1
            axios({
                method: 'post',
                url: `http://3635333bb4.wicp.vip:10404/api`,
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded',
                    'Authorization': '',
                },
                data: 'question=' + val + '&type=' + type,
            }).then(res => {
                console.log(res);
                if(res.data.code === -1) {
                    this.te2.value = '未查到'
                }else {
                    this.te2.value = res.data.data
                }
                
                setTimeout(function () {
                    this.te1.value = ''
                },3000)
                setTimeout(function () {
                    this.te2.value = ''
                },3000)
            }).catch(err => {
                this.te3.value = err
            }) 
        }
    }   

    render() {
        return (
            <div id="box">
            <textarea ref={e => this.te1 = e} name="" id="te1" cols="50" rows="7" placeholder='请准确的输入你的题目(不需要复制选项)'>

            </textarea>
            <button className="btn" onClick={() => this.show()}>搜索</button>
            <textarea readOnly="readonly" ref={e => this.te2 = e} name="" id="te2" cols="50" rows="7" placeholder='这里将显示答案(特别提醒:不要"盲目"将该答案填入你的试卷)'>

            </textarea>
            <textarea readOnly="readonly" ref={e => this.te3 = e} name="" id="te3" cols="50" rows="7" placeholder='题库异常会在这里通知你'>

            </textarea>
        </div>
        )
    }
}
