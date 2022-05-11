let booklist = [
	{id:1,name:"活着",type:'文学',date:"2021-09-09",price:50,count:1},
	{id:2,name:"活着",type:'技术',date:"2021-03-16",price:55,count:1},
	{id:3,name:"活着",type:'武道',date:"2021-09-08",price:60,count:1}
];

const app = new Vue({
	el:"#app",
	data:{
		booklist,
	},
	methods:{
		addnum(index){
			this.booklist[index].count++;
		},
		subnum(index){
			if(this.booklist[index].count>1){
				this.booklist[index].count--;
			}
		},
		deleteter(index){
			this.booklist.splice(index,1)
		}
		
	},
	computed:{
		allprice(){
			let sum=0;
			for(let i=0;i<booklist.length;i++){
				sum+=this.booklist[i].price*this.booklist[i].count;
			}
			return sum;
		}
	}
	
})