var currDoc;
var totalFonts = textFonts.length;

//uncomment this line if you want to find out how many fonts this will run on
//if it sounds like too many, hit "cancel" at the folder selection step
//alert(totalFonts);

var folder = Folder.selectDialog ("Select the final Location for your specimens");

//
var saveAs = "pdf" //options: ["pdf","png"];

if ( app.documents.length > 0 ) {
	
	currDoc = app.activeDocument;
	createSpecimen(i);
	saveOut(i);
	
} else {
	alert("You need to a have a specimen template open in Illustrator before running this script.");
}




/****
** FUNCTIONS
****/

function createSpecimen(fontIndex) {
	
	//cycle through all layers in document
	for ( var i = 0; i< currDoc.layers.length; i++ ) {
		
		//check to see if layers are locked
		if ( currDoc.layers[i].locked == false ) {
			
			//cycle through all text frames in the layer
			for ( var ii = 0; ii < currDoc.layers[i].textFrames.length; ii++ ) {
				
				//one last check, in case someone locked frames rather than layers
				if (currDoc.layers[i].textFrames[ii].locked == false){
				
					textArtRange = currDoc.layers[i].textFrames[ii].textRange;
					textArtRange.characterAttributes.textFont = textFonts[fontIndex];
					
				}
				
			}
			
		}
		
	}
	
}




function saveOut(fontIndex) {
	
	
	if (saveAs == "png") {
	
		//see page 58 for PNG export options: http://wwwimages.adobe.com/www.adobe.com/content/dam/Adobe/en/devnet/pdf/illustrator/pdfs/illustrator_scripting_reference_javascript.pdf
	
		var saveTo = new File(folder + "/" + textFonts[fontIndex].family +" "+ textFonts[fontIndex].style);
		var type = ExportType.PNG24;
		var saveOpts = new ExportOptionsPNG24();
		saveOpts.artBoardClipping = true;
		currDoc.exportFile( saveTo, type, saveOpts );
	}
	
	else if (saveAs == "pdf") {
	
		//see page 140 for PDF export options: http://wwwimages.adobe.com/www.adobe.com/content/dam/Adobe/en/devnet/pdf/illustrator/pdfs/illustrator_scripting_reference_javascript.pdf
	
		var saveTo = new File(folder + "/" + textFonts[fontIndex].family +" "+ textFonts[fontIndex].style+".pdf");
		
		saveOpts = new PDFSaveOptions();
		saveOpts.compatibility = PDFCompatibility.ACROBAT8;
		saveOpts.viewAfterSaving = false;
		saveOpts.generateThumbnails = true;
		saveOpts.preserveEditability = true;
		
		currDoc.saveAs(saveTo, saveOpts);
		
	}
	
}
