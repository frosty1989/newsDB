//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks";
import { createVisualComponent } from "uu5g04-hooks";
import Plus4U5 from "uu_plus4u5g01";
import "uu_plus4u5g01-bricks";

import Config from "./config/config.js";
import Lsi from "../config/lsi.js";
import WelcomeRow from "../bricks/welcome-row.js";
import TopicList from "../bricks/topic-list";
import TopicProvider from "../bricks/topic-provider";

//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "Home"
  //@@viewOff:statics
};

const CLASS_NAMES = {
  welcomeRow: () => Config.Css.css`
    padding: 56px 0 20px;
    max-width: 624px;
    margin: 0 auto;
    text-align: center;
  
    ${UU5.Utils.ScreenSize.getMinMediaQueries("s", `text-align: left;`)}
  
    .uu5-bricks-header {
      margin-top: 8px;
    }
    
    .plus4u5-bricks-user-photo {
      margin: 0 auto;
    }
  `
};



export const Home = createVisualComponent({
  ...STATICS,

  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin,
    UU5.Common.NestingLevelMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: "C03",
    nestingLevel: "bigBoxCollection",
    classNames: {
      main: "c03"
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes

  //@@viewOff:propTypes

  //@@viewOn:defaultProps

  //@@viewOff:defaultProps

    //@@viewOn:componentSpecificHelpers
    _getRenderDateBox() {
      let now = Date();
      return <UU5.Bricks.Box colorSchema="blue-rich" className="uu5-common-padding-xl">
        {now}
      </UU5.Bricks.Box>
    },

    getInitialState() {
      return {
        color: "default"
      }
    },
    //@@viewOff:componentSpecificHelpers

  //@@viewOn:standardComponentLifeCycle
  getInitialState() {
    return {
      color: "default"
    }
  },
  //@@viewOff:standardComponentLifeCycle

  render(props) {
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = UU5.Common.VisualComponent.getAttrs(props);
    return (

      <UU5.Bricks.Section
        header="Articles"
        colorSchema="blue-rich"
      >
        <UU5.Bricks.Container>

          <UU5.Bricks.Box colorSchema="blue" className="uu5-common-padding-m">
            Sem, na místo této komponenty, budeme vkládat jednotlivé základní příklady...
          </UU5.Bricks.Box>

          <UU5.Bricks.Box
          colorSchema="blue"
          className="uu5-common-padding-m"
        >
          <UU5.Bricks.Paragraph/>
        </UU5.Bricks.Box>

        <UU5.Bricks.Box
          colorSchema="blue"
          className="uu5-common-padding-m"
        >
          {Home._getRenderDateBox()}
        </UU5.Bricks.Box>

        

        </UU5.Bricks.Container>
        <UU5.Bricks.Div>Hello World!</UU5.Bricks.Div>
        <Topic />
      </UU5.Bricks.Section>
    );
    //@@viewOff:render
  }
});

export default Home;
