import logo from './logo.svg';
import './App.css';
import Greet from './components/greeting';
// import {Greet} from './components/greeting'; // importing an es6 arrow funtion should be like this
import Welcome from './components/welcome';
import Message from './components/message';
import Counter from './components/counter';
import FunctionClick from './components/functionClick';
import ClassClick from './components/classClick';
import EventBind from './components/eventBind';
import ParentComponent from './components/parentComponent';
import UserGreeting from './components/userGreeting';
import NameList from './components/nameList';
import Stylesheets from './components/stylesheets';
import Inline from './components/inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/form';
import LifecycleA from './components/lifecycleA';
import LifecycleB from './components/lifecycleB';
import FragmentDemo from './components/fragmentDemo';
import Table from './components/table';
import PureComp from './components/pureComponent';
import FatherComponent from './components/fatherComponent';
import RefsDemo from './components/refsDemo';
import FocusInput from './components/focusInput';
import FRParentInput from './components/FRParentInput';
import Hero from './components/hero';
import ErrorBoundary from './components/boundary';
import ClickCounter from './components/clickCounter';
import HoverCounter from './components/hoverCounter';



function App() {
	return (
		<div className="App">
			{/* <h1 className="error">Error</h1> */}
			{/* <h1 className={styles.success}>Success</h1> */}
			{/* <Greet /> */}
			{/* <Greet name="Riadh" heroName="batman">
        <p>This is children props</p>
      </Greet> */}
			{/* <Greet name="fakhri" heroName="superman">
        <button>Action</button>
      </Greet> */}
			{/* <Greet name="mehdi" heroName="wonder woman"></Greet> */}
			{/* <Welcome name="Riadh" job="angular dev"></Welcome> */}
			{/* <Welcome name="Fakhri" job="flutter dev"></Welcome> */}
			{/* <Welcome name="mehdi" job="nodejs dev"></Welcome> */}
			{/* <Message name="mehdi" job="nodejs dev"></Message> */}
			{/* <Counter addValue="4"></Counter> */}
			{/* <FunctionClick /> */}
			{/* <ClassClick></ClassClick> */}
			{/* <EventBind></EventBind> */}
			{/* <ParentComponent></ParentComponent> */}
			{/* <UserGreeting></UserGreeting> */}
			{/* <NameList></NameList> */}
			{/* <Stylesheets primary = {true}></Stylesheets> */}
			{/* <Inline></Inline> */}
			{/* <Form></Form> */}
			{/* <LifecycleA></LifecycleA> */}
			{/* <LifecycleB></LifecycleB> */}
			{/* <FragmentDemo></FragmentDemo> */}
			{/* <Table></Table> */}
			{/* <PureComp></PureComp> */}
			{/* <FatherComponent></FatherComponent> */}
			{/* <RefsDemo></RefsDemo> */}
			{/* <FocusInput ></FocusInput> */}
			{/* <FRParentInput ></FRParentInput> */}

			{/* all the components will be hidden and  covered with the Boundary component in case of error in one of them, and this is not ideal */}
			{/* <ErrorBoundary>
				<Hero heroName="Batman"></Hero>
				<Hero heroName="Superman"></Hero>
				<Hero heroName="Joker"></Hero>
			</ErrorBoundary> */}

			{/* the ideal is to encounter each component with the ErrorBoundary component to mask only the one with the error in case of error */}
			{/* <ErrorBoundary>
				<Hero heroName="Batman"></Hero>
			</ErrorBoundary>
			<ErrorBoundary>
				<Hero heroName="Superman"></Hero>
			</ErrorBoundary>
			<ErrorBoundary>
				<Hero heroName="Joker"></Hero>
			</ErrorBoundary> */}

			{/* the props (name) will pass to the HOC (withCounter.js) and not to the wrapped components */}
			<ClickCounter name="Riadh Bg"></ClickCounter>
			<HoverCounter name="Riadh Bougamra"></HoverCounter>
		</div>
	);
}

export default App;
