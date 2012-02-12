# SpecimenMaker

SpecimenMaker automates the creation of font specimen sheets in Adobe Illustrator. It has currently been tested in AI CS4. It _should_ work in CS3 and CS5, but your mileage may vary for the moment.

## Installation and Usage
1. Quit Adobe Illustrator
2. Place "SpecimenMaker" folder in the "Scripts" folder within your Illustrator application (in CS4 on a Mac this is usually in Applications > Adobe Illustrator CS4 > Presets > en_US > Scripts)
3. Start Illustrator
4. Open a pre-designed specimen template.
5. Lock any layers or text frames you don't want updated.
6. To run Scripts in Illustrator on a Mac, Choose File > Scripts > _Script Name or Script Folder > Script Name_
7. **Recommended:** Run the "test" script first (if you run the "CreateAll" test without testing, you may have to do a lot or alert clicking—trust me, it sucks).
8. Run the "CreateAll" script.
9. Select a Folder you want the final files saved to.
10. Let it process. Depending on how many fonts you have installed, other apps running, your hardware, etc. this can take anywhere from 5 minutes to 5 hours. It can also take up a lot of space on your hard drive.

##Caveats
-	**Really important:** This runs through **every** font activated on your computer. If you're one of those folks who likes to have 10,000 fonts installed and activated at all times, running this script can take a long time, and can easily crash Illustrator (I mean, it's Adobe, you know how easy it is to crash an Adobe app). It's smart to try running it on a small subset of fonts first.
-	If you're saving out PDFs, you can probably expect a few alerts about licenses not allowing font embedding in PDFs. Sorry, you will have to click OK every time you see this warning (know how to suppress alerts in AI js scripts? Please let me know.)