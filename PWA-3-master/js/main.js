	function addData(){

	// Calling input fields values
	var career=document.querySelector("#career").value;
	var name=document.querySelector("#name").value;
	var role=document.querySelector("#role").value;
	var email=document.querySelector("#email").value;

	// Education
	var degree1=document.querySelector("#degree1").value;
	var branch1=document.querySelector("#branch1").value;
	var college1=document.querySelector("#college1").value;
	var marks1=document.querySelector("#marks1").value;

	var degree2=document.querySelector("#degree2").value;
	var branch2=document.querySelector("#branch2").value;
	var college2=document.querySelector("#college2").value;
	var marks2=document.querySelector("#marks2").value;


	var degree3=document.querySelector("#degree3").value;
	var college3=document.querySelector("#college3").value;
	var marks3=document.querySelector("#marks3").value;

	// Technical skills
	var tech=document.querySelector("#tech").value;


	var idb=window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.webkitIndexedDB;
	var open=idb.open("Resume builder",1);

	open.onupgradeneeded=function(e){
		var request=e.target.result;
		request.createObjectStore("form data",{keyPath:"id",autoIncrement:true})
	}

	open.onerror=function(e){
		console.log("indexedDB error");
	}

	open.onsuccess=function(e){
		var request=e.target.result;
		var transaction=request.transaction("form data","readwrite");
		var storeDB=transaction.objectStore("form data");
		storeDB.put({
			career:career,
			name:name,
			role:role,
			email:email,
			education:[
			{
			degree:degree1,
			branch:branch1,
			college:college1,
			marks:marks1
			},
			{
			degree:degree2,
			branch:branch2,
			college:college2,
			marks:marks2
			},
			{
			degree:degree3,
			branch:"",
			college:college3,
			marks:marks3
			}

			],
			tech:[
			tech
			]
		})

		window.open("index.html");
	}
	}