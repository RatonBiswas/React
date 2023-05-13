3. Rendering Elements

রিয়েক্ট এর এলিমেন্ট হচ্ছে রিয়েক্ট এর কোর বিল্ডিং ব্লক, রিয়েক্ট শুদু তার এলিমেন্ট কেই চিনতে পারে। 
রিয়েক্ট এর দুনিয়াতে সমস্ত রিয়েক্ট এলিমেন্ট হচ্ছে ভ্যালিড জাভাস্কিপ্ট অবজেক্ট
।  কারন রিয়েক্ট হচ্ছে ভ্যানিলা জাভাস্কিপ্ট লাইব্রেরি ।
 
const element = (
	<h1 className = "heading">
		<span className = "text">Hello {new Date()
		.toLocalTimeString()}</span>
	</h1>
)

এইটা একটা রিয়েক্ট এর এলিমেন্ট , এইটা কিন্তু এইচটি এম এল এর এলিমেন্ট না। 
আমরা জখন এইটা বানাই এইটা ক্রিয়েট এলিমেন্ট
ফাংশন এর কাছে যায় । 
const element = Raect.createElement('h1',{className:'heading'}, 'hello');
 তারপর আমাদের একটা অবজেক্ট রিটার্ন করে,
element = { 
	type: 'h1',
	props:{
		className: 'heading',
		tabIndex: 0,
		children: {
			type: 'h1'
			}
		}
	};

৪। কম্পোনেট এন্ড প্রপ্স ==>
like 

function clock() {
	return(
		<h1 className = "heading">
			<span className = "text">Hello {new Date()
			.toLocalTimeString()}</span>
		</h1>
	);
}
ReactDom.render(clock(),document.getElementById('root'));

পুরা ফাংশন টাকে বলা হচ্ছে কম্পোনেট, কিন্তু এই ফাংশন যেটা রিটার্ন করতেছে সে 
রিটার্ন অংশ টুকু হচ্ছে এলিমেন্ট,	এলিমেন্ট আর কম্পোনেন্ট এক নয়।
কম্পোনেট যেটা রিটার্ন করে সেটা হচ্ছে রিয়েক্ট এর এলিমেন্ট।	
তোহ এইটা করে লাভ টা কি হলো, আমরা যখন এইটা রিয়েক্ট এর কাছে পাঠাই 
এইটা একটা এলিমেন্ট বানায় দিচ্ছে, আর আমরা এই ফাংশনটাকে 
বার বার রিউস করতে পারতেছি , এই ফাংশন বডি টা আমাকে বার বার লিখতে হবে না। 
এলিমেন্ট কিন্তু আমাদের বার বার লিখতে হচ্ছে,
আগে আমি চাইলে কোনো প্যারামিটার দিতে পারতাম না এখন আমি চাইলে প্যারামিতার দিতে পারব।

class clock{
	print(){
		return(
			<h1 className = "heading">
				<span className = "text">Hello {new Date()
				.toLocalTimeString()}</span>
			</h1>
		);
	}
}

const clockObject = new clock();

ReactDom.render(clockObject.print(),document.getElementById('root'));

ফাংশন কে কল করা যায় কিন্তু ক্লাস কে কল করা যায় না। ক্লাস কম্পোনেন্ট এর ক্ষেত্রে। 
তাই আমাদেরকে একটা অবজেক্ট বানায় নিতে হয়।
ReactDom.render(<clockObject.print()/>,document.getElementById('root'));
এইভাবে যদি কল করি তাহলে কাজ করবে না , কারন রিয়েক্ট আমাদের ক্লাস কম্পোনেন্ট দিছে যেনো আমরা 
স্টেটফুল ক্লাস তরি করতে পারি।

class clock  extends React.component{
	render(){
		return(
			<h1 className = "heading">
				<span className = "text">Hello {new Date()
				.toLocalTimeString()}</span>
			</h1>
		);
	}
}
ReactDom.render(<clock/>,document.getElementById('root'));

7. React State & Lifecycle in Class Component

একটা ক্লাস কম্পোনেন্ট কে বলা হয় স্টেটফুল কম্পোনেন্ট , একটা ক্লাস কম্পোনেন্ট এ নিজ্বস স্টেট থাকতে পারে।
স্টেট হচ্ছে কম্পোনেন্ট এর ডাটা , যে ডাটা টাকে পরিবর্তন করা যায়। তাহলে কি আমরা বলতে পারি props  একটা 
স্টেট না সেটা না, প্রপ্স কে আমরা বাইরে থেকে চেঞ্চ করতে পারি, কিন্তু স্টেট কে বাইরে থেকে চেঞ্চ করা যায় না,
প্রপ্স কে পরিবর্তন করতে পারে শুধু প্যারেন্ট কম্পোনেন্ট, স্টেট শুধু নিজ্বস যে ডাটা অইটাকে পরিবর্তন করবে। 
স্টেট হচ্ছে কম্পোনেন্ট এর নিজ্বস একটা জিনিস , বা নিজ্বস ডাটাবেজ। state is a javaScript Object,
class clock  extends React.component{
	constructor(props){
		super(props);
		this.state = {date: new Date()}
	}
	
	componentDidMount(){
		setInterval(()=>{
			this.setState ={date: new Date()}
		},1000)
	}
	render(){
		return(
			<h1 className = "heading">
				<span className = "text">Hello {this.state.date
				.toLocalTimeString(this.props.local)}</span>
			</h1>
		);
	}
}