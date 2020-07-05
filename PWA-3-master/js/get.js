var open=indexedDB.open("Resume builder",1);

	open.onupgradeneeded=function(e){
		var request=e.target.result;
		request.createObjectStore("form data",{keyPath:"id",autoIncrement:true})
	}

	open.onsuccess=function(e){
		var request=e.target.result;
		var transaction=request.transaction("form data","readwrite");
		var storeDB=transaction.objectStore("form data");
		var finalData=storeDB.getAll();
		finalData.onsuccess=function(event){
			console.log(event.target.result);
			display(event.target.result);
		}
		}

var parent=document.querySelector(".parent");
		function display(data){
			if(data.length==0){
				var error=document.createElement("div");
				error.textContent="Sorry no profile found. Add profile by using above button";
				error.classList.add("error");
				parent.classList.remove("parent");
				parent.append(error);
			} else {
			data.map((item)=>{
				var child=document.createElement("div");
				child.classList.add("child");

				var profileIcon=document.createElement("img");
				profileIcon.src="images/boy.svg";
				profileIcon.alt=item.name;

				var name=document.createElement("h2");
				name.textContent=item.name;

				var link=document.createElement("a");
				link.href="resume.html?id="+item.id;
				link.textContent="View Profile";
				link.classList.add("link");

				child.append(profileIcon);
				child.append(name);
				child.append(link);

				parent.append(child);
			})
		}
		}