import { createAppContainer, createSwitchNavigator} from "react-navigation";
import Welcome from "../screen/welcome";
import Vpn from "../screen/Vpn";

const Screens = createSwitchNavigator({
    Welcome,
    Vpn
});


export default createAppContainer(Screens);