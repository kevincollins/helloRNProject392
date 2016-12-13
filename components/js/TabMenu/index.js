
import React, {Component,PropTypes} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';


//设定内置的属性

// _type_Language_All
// _style_Language_All

//选中项，例如：_type_XXX , 为true表示 XXX 被选中
var prefixType = '_type_';

//选中项样式，例如：_style_XXX , 选中后 = {backgroundColor: '#fff'} , 否则 = {}
var prefixStyle = '_style_';

//默认左侧选中的背景颜色
const defaultBackgroundColor = {backgroundColor: '#fff'};

var obj = {};

const x = 3;// 右边区域,每行排列的个数

export default class TabMenu extends Component {

    static propTypes = {
        data: PropTypes.array.isRequired,  //
        nSelected: PropTypes.number,  //
        rightClick: PropTypes.func  // 回调函数
    };

    static defaultProps = {
        nSelected: 0,
    };


    constructor(props) {
        super(props);

        let data = this.props.data;//数组

        //左侧选择的index
        let nSelected = this.props.nSelected;

        let rowData;
        let rowId;
        for (let rowIndex in data) {
            rowData = data[rowIndex];
            rowId = rowData.id;

            let type = prefixType + rowId;
            let style = prefixStyle + rowId;
            obj[type] = false;
            obj[style] = {};

            //设定默认选中项
            if (nSelected == rowIndex) {
                obj[type] = true;
                obj[style] = defaultBackgroundColor;
            }
            rowIndex++;
        }
        obj.nSelected = nSelected;

        this.state={
            textColor: '#7C7C7C',
        };

    }

    componentWillMount() {
        console.log("11111");
        this.setState(obj);

    }

    componentDidMount() {
        console.log("222222");
    }

    //点击左侧，展示右侧二级菜单
    leftPress(nIndex) {
        let obj = {};
        for (let k in this.state) {
            //将prefixType或者prefixStyle类型全部置false
            if (k.indexOf(prefixType) > -1) {
                let obj = {};
                obj[k] = false;
                this.setState(obj);
            }
            if (k.indexOf(prefixStyle) > -1) {
                let obj = {};
                obj[k] = {};
                this.setState(obj);
            }
        }
        obj[prefixType + nIndex] = true;
        obj[prefixStyle + nIndex] = defaultBackgroundColor;
        this.setState(obj);
    }


    render() {
        var left = this.renderLeft();
        var right = this.renderRight();
        return (
            <View style={styles.container}>

                <View style={[styles.row, styles.flex_1]}>
                    <ScrollView style={[styles.flex_1, styles.left_pannel]}>
                        {left}
                    </ScrollView>
                    <ScrollView style={[styles.flex_2, styles.right_pannel]}>
                        {right}
                    </ScrollView>

                </View>
            </View>
        );
    }

    //渲染左侧
    renderLeft() {
        let data = this.props.data;
        let leftPannel = [];

        let rowData;
        let rowId;
        for (let rowIndex in data) {
            rowData = data[rowIndex];
            rowId = rowData.id;

            let style = this.state[prefixStyle + rowId];
            leftPannel.push(
                <Text key={rowIndex} onPress={this.leftPress.bind(this, rowId)}
                      style={[styles.left_row, style]}> {rowData.name}</Text>
            );
        }
        return leftPannel;
    }

    _changeTextColor(_this,myKey){
        // this.setState({
        //     textColor:'red'
        // });

        _this.refs[myKey].changeColor();
    }

    _renderRow(_this,row) {

        let rowView = [];
        row.forEach(function(item, index){
            let myKey = "xx"+item.id;
            rowView.push(
                <TouchableOpacity key={index} activeOpacity={1} onPress={_this.props.rightClick.bind(_this, item.name, item.id)}
                                          onPressOut={_this._changeTextColor.bind(_this,_this,myKey)}
                >
                    <RowInput ref={myKey} name={item.name}></RowInput>
                </TouchableOpacity>
            );
        })

        return rowView;
    }

    //渲染右边，二级菜单
    renderRight() {

        let _this = this;

        let data = this.props.data;
        let rightPannel = [];

        let rowData;
        let rowId;
        let rightDataList;
        for (let rowIndex in data) {
            rowData = data[rowIndex];
            rowId = rowData.id;
            rightDataList = rowData.serviceList;

            if (this.state[prefixType + rowId]) {

                let result = this.build(rightDataList);

                for(let i=0;i<result.length;i++){
                    let tempRow = result[i];
                    rightPannel.push(
                        <View key={i} style={{flexDirection:'row'}}>
                            {this._renderRow(_this,tempRow)}
                        </View>
                    );
                }

                break;
            }
        }

        return rightPannel;
    }

    build(rightDataList) {

        let result = [];
        let unit = [];
        for (let rightRowIndex = 0; rightRowIndex < rightDataList.length; rightRowIndex++) {
            let rightRowData = rightDataList[rightRowIndex];
            let rightRowText = rightRowData.name;
            let rowId = rightRowData.id;

            unit.push({name:rightRowText,id:rowId});

            let temp = rightRowIndex + 1;
            if (temp % x == 0 && rightRowIndex > 0) {
                result.push(unit);
                unit = [];
            }
        }
        if (unit.length > 0) {
            result.push(unit);
        }
        return result;
    }
}

class RowInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            textColor: '#7C7C7C',
        };

        this.changeColor = this.changeColor.bind(this);
    }

    changeColor(){
        this.setState({
            textColor:'red'
        });
    }

    render(){
        const {name} = this.props;
        return(
            <Text style={[styles.right_row,{justifyContent:'flex-start',color:this.state.textColor}]}>{name}</Text>
        );
    }
}


var styles = StyleSheet.create({
    container: {
        height: 640,
        flex: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#ddd'
    },
    row: {
        flexDirection: 'row'
    },
    flex_1: {
        flex: 1
    },
    flex_2: {
        flex: 2
    },
    header: {
        height: 35,
        borderBottomWidth: 1,
        borderColor: '#DFDFDF',
        backgroundColor: '#F5F5F5'
    },
    header_text: {
        color: '#7B7B7B',
        fontSize: 15
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    left_pannel: {
        backgroundColor: '#F2F2F2',
    },
    left_row: {
        height: 30,
        lineHeight: 20,
        fontSize: 14,
        color: '#7C7C7C',
    },

    right_row:{
        width:60,
        height: 30,
        lineHeight: 20,
        fontSize: 14,
        //color: '#7C7C7C',
        textAlign:'center'
    },
    right_pannel: {
        marginLeft: 10
    },
    active_blue: {
        color: '#00B7EB'
    },
    active_fff: {
        backgroundColor: '#fff'
    }
});

// TabMenu.defaultProps = {
//     //nSelected: 0,
// }
//
module.exports = TabMenu;