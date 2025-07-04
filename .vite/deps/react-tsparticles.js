import {
  tsParticles
} from "./chunk-5B3IYUYS.js";
import {
  require_react
} from "./chunk-TVFQMRVC.js";
import {
  __toESM
} from "./chunk-G3PMV62Z.js";

// node_modules/react-tsparticles/esm/Particles.js
var import_react = __toESM(require_react());

// node_modules/react-tsparticles/esm/Utils.js
var isObject = (val) => typeof val === "object" && val !== null;
function deepCompare(obj1, obj2, excludeKeyFn = () => false) {
  if (!isObject(obj1) || !isObject(obj2)) {
    return obj1 === obj2;
  }
  const keys1 = Object.keys(obj1).filter((key) => !excludeKeyFn(key)), keys2 = Object.keys(obj2).filter((key) => !excludeKeyFn(key));
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    const value1 = obj1[key], value2 = obj2[key];
    if (isObject(value1) && isObject(value2)) {
      if (value1 === obj2 && value2 === obj1) {
        continue;
      }
      if (!deepCompare(value1, value2, excludeKeyFn)) {
        return false;
      }
    } else if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!deepCompareArrays(value1, value2, excludeKeyFn)) {
        return false;
      }
    } else if (value1 !== value2) {
      return false;
    }
  }
  return true;
}
function deepCompareArrays(arr1, arr2, excludeKeyFn) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    const val1 = arr1[i], val2 = arr2[i];
    if (Array.isArray(val1) && Array.isArray(val2)) {
      if (!deepCompareArrays(val1, val2, excludeKeyFn)) {
        return false;
      }
    } else if (isObject(val1) && isObject(val2)) {
      if (!deepCompare(val1, val2, excludeKeyFn)) {
        return false;
      }
    } else if (val1 !== val2) {
      return false;
    }
  }
  return true;
}

// node_modules/react-tsparticles/esm/Particles.js
var defaultId = "tsparticles";
var Particles = class _Particles extends import_react.Component {
  constructor(props) {
    super(props);
    this.state = {
      init: false,
      library: void 0
    };
  }
  destroy() {
    if (!this.state.library) {
      return;
    }
    this.state.library.destroy();
    this.setState({
      library: void 0
    });
  }
  shouldComponentUpdate(nextProps) {
    const nextOptions = nextProps.options ?? nextProps.params, currentOptions = this.props.options ?? this.props.params;
    return nextProps.url !== this.props.url || nextProps.id !== this.props.id || nextProps.canvasClassName !== this.props.canvasClassName || nextProps.className !== this.props.className || nextProps.height !== this.props.height || nextProps.width !== this.props.width || !deepCompare(nextProps.style, this.props.style) || nextProps.init !== this.props.init || nextProps.loaded !== this.props.loaded || !deepCompare(nextOptions, currentOptions, (key) => key.startsWith("_"));
  }
  componentDidUpdate() {
    this.refresh();
  }
  forceUpdate() {
    this.refresh().then(() => {
      super.forceUpdate();
    });
  }
  componentDidMount() {
    (async () => {
      if (this.props.init) {
        await this.props.init(tsParticles);
      }
      this.setState({
        init: true
      }, async () => {
        await this.loadParticles();
      });
    })();
  }
  componentWillUnmount() {
    this.destroy();
  }
  render() {
    const { width, height, className, canvasClassName, id } = this.props;
    return import_react.default.createElement(
      "div",
      { className, id },
      import_react.default.createElement("canvas", { className: canvasClassName, style: {
        ...this.props.style,
        width,
        height
      } })
    );
  }
  async refresh() {
    this.destroy();
    await this.loadParticles();
  }
  async loadParticles() {
    if (!this.state.init) {
      return;
    }
    const id = this.props.id ?? _Particles.defaultProps.id ?? defaultId, container = await tsParticles.load({
      url: this.props.url,
      id,
      options: this.props.options ?? this.props.params
    });
    if (this.props.container) {
      this.props.container.current = container;
    }
    this.setState({
      library: container
    });
    if (this.props.loaded) {
      await this.props.loaded(container);
    }
  }
};
Particles.defaultProps = {
  width: "100%",
  height: "100%",
  options: {},
  style: {},
  url: void 0,
  id: defaultId
};
var Particles_default = Particles;

// node_modules/react-tsparticles/esm/index.js
var esm_default = Particles_default;
export {
  Particles_default as Particles,
  esm_default as default
};
//# sourceMappingURL=react-tsparticles.js.map
