import CsvMain from "./CvsMain";
import HomeUI from "./HomeUI";

const {ccclass, property} = cc._decorator;

@ccclass
export default class MainCtrl extends cc.Component {

    start () {
        CsvMain.EnterUI(HomeUI);
    }
}
