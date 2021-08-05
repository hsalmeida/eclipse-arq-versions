function hideSectionsIfHiddenFromNav() {

	var section= new Array(7);
	
	section[0]="overview";
	section[1]="whatsnew";
	section[2]="migrate";
	section[3]="webresources";
	section[4]="firststeps";
	section[5]="tutorials";
	section[6]="samples";

	//alert ("Running hideSectionsIfHiddenFromNav");

	var x=0;
	for (x=0; x<7; x++) {
		//alert(quote[x]);
		var mySectionContentId="section-" + section[x];
		var mySection=document.getElementById(mySectionContentId);
		//alert(quote())
		if (!document.getElementById(section[x])) {
			//alert ("Section " + mySectionContentId + " is hidden");
			mySection.className="section-box-hidden";
		}
		
	}
}

function showInitialContentInEachSection() {
	
	//alert ("Running showInitialContentInEachSection");

	//Walk the DOM to find each content section
	var section= new Array(7);
	
	section[0]="section-overview";
	section[1]="section-whatsnew";
	section[2]="section-migrate";
	section[3]="section-webresources";
	section[4]="section-firststeps";
	section[5]="section-tutorials";
	section[6]="section-samples";
	
	var x=0;

	//For each content section
	for (x=0; x<7; x++) {
	
		var mySection=document.getElementById(section[x]);
		var sectionTopLeft=mySection.firstChild.firstChild.firstChild.nextSibling.nextSibling;
		var sectionTopRight=sectionTopLeft.nextSibling;
		var sectionBottomLeft=sectionTopRight.nextSibling.nextSibling;
		var sectionBottomRight=sectionBottomLeft.nextSibling;
		
		//If top-left has content
		if (sectionTopLeft.hasChildNodes()) { 
		
			//alert(section[x] + " has 1ST children in TOP LEFT");

			//Set it as active quadrant
			var activeQuadrant=sectionTopLeft;
			
			//Hide other quadrants as inactive
			sectionTopRight.className="hidden-quadrant";
			sectionBottomLeft.className="hidden-quadrant";
			sectionBottomRight.className="hidden-quadrant";
		
		//If top-left does not have content, do this:
		} else {

			//Hide other quadrants as inactive
			sectionTopRight.className="hidden-quadrant";
			sectionBottomLeft.className="hidden-quadrant";
			sectionBottomRight.className="hidden-quadrant";

			//
			//
			// IF WE END HERE, ONLY 1st QUADRANT WILL BE SHOWN
			// THE REST OF THIS WOULD HANDLE THE LOGIC 
			// DIFFERENTLY, ESSENTIALLY TRYING EACH QUADRANT ONE
			// AT A TIME. I PREFER DEPENDING SOLELY ON 1st QUADRANT 
			// FOR INITIAL CONTENT
			//
			// SO COMMENTING THE REST OF THIS OUT
			
			
			/*
			// Check if top-right has content
			if (sectionTopRight.hasChildNodes()) { 
				
				//alert(section[x] + " has 1ST children in TOP RIGHT");
				
				//Set it as active quadrant
				var activeQuadrant=sectionTopRight;
	
				//Hide remaining quadrants as inactive
				sectionBottomLeft.className="hidden-quadrant";
				sectionBottomRight.className="hidden-quadrant";
			
			//If top-right does not have content, do this:
			} else {
				
				// Check if bottom-left has content
				if (sectionBottomLeft.hasChildNodes()) { 

					//alert(section[x] + " has 1ST children in BOTTOM LEFT");

					//Set it as active quadrant
					var activeQuadrant=sectionBottomLeft;
		
					//Hide remaining quadrants
					sectionBottomRight.className="hidden-quadrant";
	
				//If bottom-left does not have content, do this:
				} else {
					
					// Check if bottom-right has content
		
						//alert(section[x] + " has 1ST children in BOTTOM RIGHT");
				
						//Set it as active quadrant
						var activeQuadrant=sectionBottomRight;
			
						//Hide remaining quadrants	
				}
			}
			
			*/
		}
	}
}