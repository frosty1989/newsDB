//@@viewOn:imports
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import "uu_plus4u5g01-bricks";

import Config from "./config/config.js";
import Lsi from "../config/lsi.js";
import TopicList from "../bricks/topic-list";
import TopicProvider from "../bricks/topic-provider";
import TopicCreate from "../bricks/topic-create";
//@@viewOff:imports

const Home = UU5.Common.VisualComponent.create({
  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin, UU5.Common.RouteMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "Home",
    classNames: {
      main: "",
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
    },
    lsi: Lsi.auth
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    identity: UU5.PropTypes.shape()
  },
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  //@@viewOff:getDefaultProps

  //@@viewOn:reactLifeCycle
  //@@viewOff:reactLifeCycle

  //@@viewOn:interface
  //@@viewOff:interface

  //@@viewOn:overriding
  //@@viewOff:overriding

  //@@viewOn:private
  //@@viewOff:private

  //@@viewOn:render
  render() {
    return <UU5.Bricks.Div {...this.getMainPropsToPass()}>Welcome in uuJokes</UU5.Bricks.Div>;

  }
  //@@viewOff:render
});

export default Home;