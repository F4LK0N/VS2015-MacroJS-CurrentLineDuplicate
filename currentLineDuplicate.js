//THIS SCRIPT DUPLICATE THE CURRENT LINE
//By.: Otávio B. Sória

//GET INITIAL POSITION
var posInitialLine = dte.ActiveDocument.Selection.CurrentLine;
var posInitialColumn = dte.ActiveDocument.Selection.CurrentColumn;

//GET CURRENT LINE
dte.ActiveDocument.Selection.StartOfLine(0);
dte.ActiveDocument.Selection.EndOfLine(true);
var line = dte.ActiveDocument.Selection.Text;

//INSERT NEW LINE
dte.ActiveDocument.Selection.EndOfLine();
dte.ActiveDocument.Selection.NewLine();
dte.ActiveDocument.Selection.StartOfLine();
dte.ActiveDocument.Selection.Text = line;

//MOVE CURSOR TO START POSITON
dte.ActiveDocument.Selection.MoveToLineAndOffset(posInitialLine, posInitialColumn);


