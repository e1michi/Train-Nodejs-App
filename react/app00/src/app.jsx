//コンポーネントの作成
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myText : null
    };
    this.setMyText = this.setMyText.bind(this);
  }
  //テキストの設定
  setMyText(){
      this.setState({
        myText : this.refs.myText.value
      });
      this.refs.myText.value='';
  }
  render() {
    return (
      <div>
        <p>入力値:{this.state.myText}</p>
        <input type="text" ref="myText"/>
        <input type="button" value="入力"　onClick={this.setMyText}/>
      </div>
    )
  }
};
//コンポーネントの描画
ReactDOM.render(
  <MyComponent />,
  document.getElementById('app')
);