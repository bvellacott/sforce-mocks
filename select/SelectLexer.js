// Generated from ./Select.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\u000f\u007f\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0005\nD\n\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0005\f",
    "J\n\f\u0003\f\u0006\fM\n\f\r\f\u000e\fN\u0003\f\u0007\fR\n\f\f\f\u000e",
    "\fU\u000b\f\u0003\f\u0007\fX\n\f\f\f\u000e\f[\u000b\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0007\fl\n\f\f\f\u000e\fo\u000b\f",
    "\u0003\f\u0005\fr\n\f\u0003\r\u0006\ru\n\r\r\r\u000e\rv\u0003\u000e",
    "\u0006\u000ez\n\u000e\r\u000e\u000e\u000e{\u0003\u000e\u0003\u000e\u0003",
    "m\u0002\u000f\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007",
    "\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f",
    "\u0003\u0002\u0007\u0004\u0002--//\u0003\u00022;\u0003\u000200\u0005",
    "\u0002C\\aac|\u0005\u0002\u000b\f\u000f\u000f\"\"\u008d\u0002\u0003",
    "\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007",
    "\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b",
    "\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f",
    "\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013",
    "\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017",
    "\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b",
    "\u0003\u0002\u0002\u0002\u0003\u001d\u0003\u0002\u0002\u0002\u0005$",
    "\u0003\u0002\u0002\u0002\u0007&\u0003\u0002\u0002\u0002\t(\u0003\u0002",
    "\u0002\u0002\u000b*\u0003\u0002\u0002\u0002\r/\u0003\u0002\u0002\u0002",
    "\u000f3\u0003\u0002\u0002\u0002\u00116\u0003\u0002\u0002\u0002\u0013",
    "C\u0003\u0002\u0002\u0002\u0015E\u0003\u0002\u0002\u0002\u0017q\u0003",
    "\u0002\u0002\u0002\u0019t\u0003\u0002\u0002\u0002\u001by\u0003\u0002",
    "\u0002\u0002\u001d\u001e\u0007u\u0002\u0002\u001e\u001f\u0007g\u0002",
    "\u0002\u001f \u0007n\u0002\u0002 !\u0007g\u0002\u0002!\"\u0007e\u0002",
    "\u0002\"#\u0007v\u0002\u0002#\u0004\u0003\u0002\u0002\u0002$%\u0007",
    ".\u0002\u0002%\u0006\u0003\u0002\u0002\u0002&\'\u0007*\u0002\u0002\'",
    "\b\u0003\u0002\u0002\u0002()\u0007+\u0002\u0002)\n\u0003\u0002\u0002",
    "\u0002*+\u0007h\u0002\u0002+,\u0007t\u0002\u0002,-\u0007q\u0002\u0002",
    "-.\u0007o\u0002\u0002.\f\u0003\u0002\u0002\u0002/0\u0007c\u0002\u0002",
    "01\u0007p\u0002\u000212\u0007f\u0002\u00022\u000e\u0003\u0002\u0002",
    "\u000234\u0007q\u0002\u000245\u0007t\u0002\u00025\u0010\u0003\u0002",
    "\u0002\u000267\u0007y\u0002\u000278\u0007j\u0002\u000289\u0007g\u0002",
    "\u00029:\u0007t\u0002\u0002:;\u0007g\u0002\u0002;\u0012\u0003\u0002",
    "\u0002\u0002<D\u0007>\u0002\u0002=>\u0007>\u0002\u0002>D\u0007?\u0002",
    "\u0002?D\u0007@\u0002\u0002@A\u0007@\u0002\u0002AD\u0007?\u0002\u0002",
    "BD\u0007?\u0002\u0002C<\u0003\u0002\u0002\u0002C=\u0003\u0002\u0002",
    "\u0002C?\u0003\u0002\u0002\u0002C@\u0003\u0002\u0002\u0002CB\u0003\u0002",
    "\u0002\u0002D\u0014\u0003\u0002\u0002\u0002EF\u0007k\u0002\u0002FG\u0007",
    "p\u0002\u0002G\u0016\u0003\u0002\u0002\u0002HJ\t\u0002\u0002\u0002I",
    "H\u0003\u0002\u0002\u0002IJ\u0003\u0002\u0002\u0002JL\u0003\u0002\u0002",
    "\u0002KM\t\u0003\u0002\u0002LK\u0003\u0002\u0002\u0002MN\u0003\u0002",
    "\u0002\u0002NL\u0003\u0002\u0002\u0002NO\u0003\u0002\u0002\u0002OS\u0003",
    "\u0002\u0002\u0002PR\t\u0004\u0002\u0002QP\u0003\u0002\u0002\u0002R",
    "U\u0003\u0002\u0002\u0002SQ\u0003\u0002\u0002\u0002ST\u0003\u0002\u0002",
    "\u0002TY\u0003\u0002\u0002\u0002US\u0003\u0002\u0002\u0002VX\t\u0003",
    "\u0002\u0002WV\u0003\u0002\u0002\u0002X[\u0003\u0002\u0002\u0002YW\u0003",
    "\u0002\u0002\u0002YZ\u0003\u0002\u0002\u0002Zr\u0003\u0002\u0002\u0002",
    "[Y\u0003\u0002\u0002\u0002\\]\u0007v\u0002\u0002]^\u0007t\u0002\u0002",
    "^_\u0007w\u0002\u0002_r\u0007g\u0002\u0002`a\u0007h\u0002\u0002ab\u0007",
    "c\u0002\u0002bc\u0007n\u0002\u0002cd\u0007u\u0002\u0002dr\u0007g\u0002",
    "\u0002ef\u0007p\u0002\u0002fg\u0007w\u0002\u0002gh\u0007n\u0002\u0002",
    "hr\u0007n\u0002\u0002im\u0007)\u0002\u0002jl\u000b\u0002\u0002\u0002",
    "kj\u0003\u0002\u0002\u0002lo\u0003\u0002\u0002\u0002mn\u0003\u0002\u0002",
    "\u0002mk\u0003\u0002\u0002\u0002np\u0003\u0002\u0002\u0002om\u0003\u0002",
    "\u0002\u0002pr\u0007)\u0002\u0002qI\u0003\u0002\u0002\u0002q\\\u0003",
    "\u0002\u0002\u0002q`\u0003\u0002\u0002\u0002qe\u0003\u0002\u0002\u0002",
    "qi\u0003\u0002\u0002\u0002r\u0018\u0003\u0002\u0002\u0002su\t\u0005",
    "\u0002\u0002ts\u0003\u0002\u0002\u0002uv\u0003\u0002\u0002\u0002vt\u0003",
    "\u0002\u0002\u0002vw\u0003\u0002\u0002\u0002w\u001a\u0003\u0002\u0002",
    "\u0002xz\t\u0006\u0002\u0002yx\u0003\u0002\u0002\u0002z{\u0003\u0002",
    "\u0002\u0002{y\u0003\u0002\u0002\u0002{|\u0003\u0002\u0002\u0002|}\u0003",
    "\u0002\u0002\u0002}~\b\u000e\u0002\u0002~\u001c\u0003\u0002\u0002\u0002",
    "\f\u0002CINSYmqv{\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function SelectLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

SelectLexer.prototype = Object.create(antlr4.Lexer.prototype);
SelectLexer.prototype.constructor = SelectLexer;

SelectLexer.EOF = antlr4.Token.EOF;
SelectLexer.T__0 = 1;
SelectLexer.T__1 = 2;
SelectLexer.T__2 = 3;
SelectLexer.T__3 = 4;
SelectLexer.T__4 = 5;
SelectLexer.T__5 = 6;
SelectLexer.T__6 = 7;
SelectLexer.T__7 = 8;
SelectLexer.OPERATOR = 9;
SelectLexer.ARRAYOPERATOR = 10;
SelectLexer.CONSTANT = 11;
SelectLexer.FIELD = 12;
SelectLexer.WS = 13;


SelectLexer.modeNames = [ "DEFAULT_MODE" ];

SelectLexer.literalNames = [ null, "'select'", "','", "'('", "')'", "'from'", 
                             "'and'", "'or'", "'where'", null, "'in'" ];

SelectLexer.symbolicNames = [ null, null, null, null, null, null, null, 
                              null, null, "OPERATOR", "ARRAYOPERATOR", "CONSTANT", 
                              "FIELD", "WS" ];

SelectLexer.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", 
                          "T__6", "T__7", "OPERATOR", "ARRAYOPERATOR", "CONSTANT", 
                          "FIELD", "WS" ];

SelectLexer.grammarFileName = "Select.g4";



exports.SelectLexer = SelectLexer;

