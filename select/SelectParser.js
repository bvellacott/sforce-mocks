// Generated from ./Select.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4');
var SelectListener = require('./SelectListener').SelectListener;
var SelectVisitor = require('./SelectVisitor').SelectVisitor;

var grammarFileName = "Select.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u000f{\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0007\u0002\u001b\n\u0002\f\u0002\u000e",
    "\u0002\u001e\u000b\u0002\u0003\u0002\u0003\u0002\u0005\u0002\"\n\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003",
    ")\n\u0003\f\u0003\u000e\u0003,\u000b\u0003\u0003\u0003\u0003\u0003\u0005",
    "\u00030\n\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0007\u0007?\n\u0007\f\u0007\u000e\u0007",
    "B\u000b\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0005\bH\n\b\u0003",
    "\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\nR",
    "\n\n\u0003\n\u0003\n\u0005\nV\n\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0005\n]\n\n\u0006\n_\n\n\r\n\u000e\n`\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0005\nh\n\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b",
    "y\n\u000b\u0003\u000b\u0002\u0002\f\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0002\u0002\u0080\u0002\u0016\u0003\u0002\u0002\u0002\u0004",
    "#\u0003\u0002\u0002\u0002\u00063\u0003\u0002\u0002\u0002\b6\u0003\u0002",
    "\u0002\u0002\n8\u0003\u0002\u0002\u0002\f:\u0003\u0002\u0002\u0002\u000e",
    "G\u0003\u0002\u0002\u0002\u0010I\u0003\u0002\u0002\u0002\u0012g\u0003",
    "\u0002\u0002\u0002\u0014x\u0003\u0002\u0002\u0002\u0016\u0017\u0007",
    "\u0003\u0002\u0002\u0017\u001c\u0005\u000e\b\u0002\u0018\u0019\u0007",
    "\u0004\u0002\u0002\u0019\u001b\u0005\u000e\b\u0002\u001a\u0018\u0003",
    "\u0002\u0002\u0002\u001b\u001e\u0003\u0002\u0002\u0002\u001c\u001a\u0003",
    "\u0002\u0002\u0002\u001c\u001d\u0003\u0002\u0002\u0002\u001d\u001f\u0003",
    "\u0002\u0002\u0002\u001e\u001c\u0003\u0002\u0002\u0002\u001f!\u0005",
    "\u0006\u0004\u0002 \"\u0005\u0010\t\u0002! \u0003\u0002\u0002\u0002",
    "!\"\u0003\u0002\u0002\u0002\"\u0003\u0003\u0002\u0002\u0002#$\u0007",
    "\u0005\u0002\u0002$%\u0007\u0003\u0002\u0002%*\u0005\u000e\b\u0002&",
    "\'\u0007\u0004\u0002\u0002\')\u0005\u000e\b\u0002(&\u0003\u0002\u0002",
    "\u0002),\u0003\u0002\u0002\u0002*(\u0003\u0002\u0002\u0002*+\u0003\u0002",
    "\u0002\u0002+-\u0003\u0002\u0002\u0002,*\u0003\u0002\u0002\u0002-/\u0005",
    "\u0006\u0004\u0002.0\u0005\u0010\t\u0002/.\u0003\u0002\u0002\u0002/",
    "0\u0003\u0002\u0002\u000201\u0003\u0002\u0002\u000212\u0007\u0006\u0002",
    "\u00022\u0005\u0003\u0002\u0002\u000234\u0007\u0007\u0002\u000245\u0007",
    "\u000e\u0002\u00025\u0007\u0003\u0002\u0002\u000267\u0007\b\u0002\u0002",
    "7\t\u0003\u0002\u0002\u000289\u0007\t\u0002\u00029\u000b\u0003\u0002",
    "\u0002\u0002:;\u0007\u0005\u0002\u0002;@\u0007\r\u0002\u0002<=\u0007",
    "\u0004\u0002\u0002=?\u0007\r\u0002\u0002><\u0003\u0002\u0002\u0002?",
    "B\u0003\u0002\u0002\u0002@>\u0003\u0002\u0002\u0002@A\u0003\u0002\u0002",
    "\u0002AC\u0003\u0002\u0002\u0002B@\u0003\u0002\u0002\u0002CD\u0007\u0006",
    "\u0002\u0002D\r\u0003\u0002\u0002\u0002EH\u0005\u0004\u0003\u0002FH",
    "\u0007\u000e\u0002\u0002GE\u0003\u0002\u0002\u0002GF\u0003\u0002\u0002",
    "\u0002H\u000f\u0003\u0002\u0002\u0002IJ\u0007\n\u0002\u0002JK\u0005",
    "\u0012\n\u0002K\u0011\u0003\u0002\u0002\u0002LR\u0005\u0014\u000b\u0002",
    "MN\u0007\u0005\u0002\u0002NO\u0005\u0012\n\u0002OP\u0007\u0006\u0002",
    "\u0002PR\u0003\u0002\u0002\u0002QL\u0003\u0002\u0002\u0002QM\u0003\u0002",
    "\u0002\u0002R^\u0003\u0002\u0002\u0002SV\u0005\b\u0005\u0002TV\u0005",
    "\n\u0006\u0002US\u0003\u0002\u0002\u0002UT\u0003\u0002\u0002\u0002V",
    "\\\u0003\u0002\u0002\u0002W]\u0005\u0014\u000b\u0002XY\u0007\u0005\u0002",
    "\u0002YZ\u0005\u0012\n\u0002Z[\u0007\u0006\u0002\u0002[]\u0003\u0002",
    "\u0002\u0002\\W\u0003\u0002\u0002\u0002\\X\u0003\u0002\u0002\u0002]",
    "_\u0003\u0002\u0002\u0002^U\u0003\u0002\u0002\u0002_`\u0003\u0002\u0002",
    "\u0002`^\u0003\u0002\u0002\u0002`a\u0003\u0002\u0002\u0002ah\u0003\u0002",
    "\u0002\u0002bc\u0007\u0005\u0002\u0002cd\u0005\u0012\n\u0002de\u0007",
    "\u0006\u0002\u0002eh\u0003\u0002\u0002\u0002fh\u0005\u0014\u000b\u0002",
    "gQ\u0003\u0002\u0002\u0002gb\u0003\u0002\u0002\u0002gf\u0003\u0002\u0002",
    "\u0002h\u0013\u0003\u0002\u0002\u0002ij\u0007\u000e\u0002\u0002jk\u0007",
    "\u000b\u0002\u0002ky\u0007\u000e\u0002\u0002lm\u0007\u000e\u0002\u0002",
    "mn\u0007\u000b\u0002\u0002ny\u0007\r\u0002\u0002op\u0007\r\u0002\u0002",
    "pq\u0007\u000b\u0002\u0002qy\u0007\u000e\u0002\u0002rs\u0007\r\u0002",
    "\u0002st\u0007\u000b\u0002\u0002ty\u0007\r\u0002\u0002uv\u0007\u000e",
    "\u0002\u0002vw\u0007\f\u0002\u0002wy\u0005\f\u0007\u0002xi\u0003\u0002",
    "\u0002\u0002xl\u0003\u0002\u0002\u0002xo\u0003\u0002\u0002\u0002xr\u0003",
    "\u0002\u0002\u0002xu\u0003\u0002\u0002\u0002y\u0015\u0003\u0002\u0002",
    "\u0002\u000e\u001c!*/@GQU\\`gx"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'select'", "','", "'('", "')'", "'from'", "'and'", 
                     "'or'", "'where'", null, "'in'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      "OPERATOR", "ARRAYOPERATOR", "CONSTANT", "FIELD", 
                      "WS" ];

var ruleNames =  [ "select", "subselect", "from", "and", "or", "arrayconstant", 
                   "fields", "where", "conditionset", "condition" ];

function SelectParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

SelectParser.prototype = Object.create(antlr4.Parser.prototype);
SelectParser.prototype.constructor = SelectParser;

Object.defineProperty(SelectParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

SelectParser.EOF = antlr4.Token.EOF;
SelectParser.T__0 = 1;
SelectParser.T__1 = 2;
SelectParser.T__2 = 3;
SelectParser.T__3 = 4;
SelectParser.T__4 = 5;
SelectParser.T__5 = 6;
SelectParser.T__6 = 7;
SelectParser.T__7 = 8;
SelectParser.OPERATOR = 9;
SelectParser.ARRAYOPERATOR = 10;
SelectParser.CONSTANT = 11;
SelectParser.FIELD = 12;
SelectParser.WS = 13;

SelectParser.RULE_select = 0;
SelectParser.RULE_subselect = 1;
SelectParser.RULE_from = 2;
SelectParser.RULE_and = 3;
SelectParser.RULE_or = 4;
SelectParser.RULE_arrayconstant = 5;
SelectParser.RULE_fields = 6;
SelectParser.RULE_where = 7;
SelectParser.RULE_conditionset = 8;
SelectParser.RULE_condition = 9;

function SelectContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SelectParser.RULE_select;
    return this;
}

SelectContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SelectContext.prototype.constructor = SelectContext;

SelectContext.prototype.fields = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FieldsContext);
    } else {
        return this.getTypedRuleContext(FieldsContext,i);
    }
};

SelectContext.prototype.from = function() {
    return this.getTypedRuleContext(FromContext,0);
};

SelectContext.prototype.where = function() {
    return this.getTypedRuleContext(WhereContext,0);
};

SelectContext.prototype.enterRule = function(listener) {
    if(listener instanceof SelectListener ) {
        listener.enterSelect(this);
	}
};

SelectContext.prototype.exitRule = function(listener) {
    if(listener instanceof SelectListener ) {
        listener.exitSelect(this);
	}
};

SelectContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SelectVisitor ) {
        return visitor.visitSelect(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SelectParser.SelectContext = SelectContext;

SelectParser.prototype.select = function() {

    var localctx = new SelectContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, SelectParser.RULE_select);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 20;
        this.match(SelectParser.T__0);
        this.state = 21;
        this.fields();
        this.state = 26;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SelectParser.T__1) {
            this.state = 22;
            this.match(SelectParser.T__1);
            this.state = 23;
            this.fields();
            this.state = 28;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 29;
        this.from();
        this.state = 31;
        _la = this._input.LA(1);
        if(_la===SelectParser.T__7) {
            this.state = 30;
            this.where();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SubselectContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SelectParser.RULE_subselect;
    return this;
}

SubselectContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SubselectContext.prototype.constructor = SubselectContext;

SubselectContext.prototype.fields = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FieldsContext);
    } else {
        return this.getTypedRuleContext(FieldsContext,i);
    }
};

SubselectContext.prototype.from = function() {
    return this.getTypedRuleContext(FromContext,0);
};

SubselectContext.prototype.where = function() {
    return this.getTypedRuleContext(WhereContext,0);
};

SubselectContext.prototype.enterRule = function(listener) {
    if(listener instanceof SelectListener ) {
        listener.enterSubselect(this);
	}
};

SubselectContext.prototype.exitRule = function(listener) {
    if(listener instanceof SelectListener ) {
        listener.exitSubselect(this);
	}
};

SubselectContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SelectVisitor ) {
        return visitor.visitSubselect(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SelectParser.SubselectContext = SubselectContext;

SelectParser.prototype.subselect = function() {

    var localctx = new SubselectContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, SelectParser.RULE_subselect);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 33;
        this.match(SelectParser.T__2);
        this.state = 34;
        this.match(SelectParser.T__0);
        this.state = 35;
        this.fields();
        this.state = 40;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SelectParser.T__1) {
            this.state = 36;
            this.match(SelectParser.T__1);
            this.state = 37;
            this.fields();
            this.state = 42;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 43;
        this.from();
        this.state = 45;
        _la = this._input.LA(1);
        if(_la===SelectParser.T__7) {
            this.state = 44;
            this.where();
        }

        this.state = 47;
        this.match(SelectParser.T__3);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FromContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SelectParser.RULE_from;
    return this;
}

FromContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FromContext.prototype.constructor = FromContext;

FromContext.prototype.FIELD = function() {
    return this.getToken(SelectParser.FIELD, 0);
};

FromContext.prototype.enterRule = function(listener) {
    if(listener instanceof SelectListener ) {
        listener.enterFrom(this);
	}
};

FromContext.prototype.exitRule = function(listener) {
    if(listener instanceof SelectListener ) {
        listener.exitFrom(this);
	}
};

FromContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SelectVisitor ) {
        return visitor.visitFrom(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SelectParser.FromContext = FromContext;

SelectParser.prototype.from = function() {

    var localctx = new FromContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, SelectParser.RULE_from);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 49;
        this.match(SelectParser.T__4);
        this.state = 50;
        this.match(SelectParser.FIELD);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AndContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SelectParser.RULE_and;
    return this;
}

AndContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AndContext.prototype.constructor = AndContext;


AndContext.prototype.enterRule = function(listener) {
    if(listener instanceof SelectListener ) {
        listener.enterAnd(this);
	}
};

AndContext.prototype.exitRule = function(listener) {
    if(listener instanceof SelectListener ) {
        listener.exitAnd(this);
	}
};

AndContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SelectVisitor ) {
        return visitor.visitAnd(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SelectParser.AndContext = AndContext;

SelectParser.prototype.and = function() {

    var localctx = new AndContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, SelectParser.RULE_and);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 52;
        this.match(SelectParser.T__5);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SelectParser.RULE_or;
    return this;
}

OrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OrContext.prototype.constructor = OrContext;


OrContext.prototype.enterRule = function(listener) {
    if(listener instanceof SelectListener ) {
        listener.enterOr(this);
	}
};

OrContext.prototype.exitRule = function(listener) {
    if(listener instanceof SelectListener ) {
        listener.exitOr(this);
	}
};

OrContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SelectVisitor ) {
        return visitor.visitOr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SelectParser.OrContext = OrContext;

SelectParser.prototype.or = function() {

    var localctx = new OrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, SelectParser.RULE_or);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 54;
        this.match(SelectParser.T__6);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArrayconstantContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SelectParser.RULE_arrayconstant;
    return this;
}

ArrayconstantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayconstantContext.prototype.constructor = ArrayconstantContext;

ArrayconstantContext.prototype.CONSTANT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SelectParser.CONSTANT);
    } else {
        return this.getToken(SelectParser.CONSTANT, i);
    }
};


ArrayconstantContext.prototype.enterRule = function(listener) {
    if(listener instanceof SelectListener ) {
        listener.enterArrayconstant(this);
	}
};

ArrayconstantContext.prototype.exitRule = function(listener) {
    if(listener instanceof SelectListener ) {
        listener.exitArrayconstant(this);
	}
};

ArrayconstantContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SelectVisitor ) {
        return visitor.visitArrayconstant(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SelectParser.ArrayconstantContext = ArrayconstantContext;

SelectParser.prototype.arrayconstant = function() {

    var localctx = new ArrayconstantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, SelectParser.RULE_arrayconstant);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 56;
        this.match(SelectParser.T__2);
        this.state = 57;
        this.match(SelectParser.CONSTANT);
        this.state = 62;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SelectParser.T__1) {
            this.state = 58;
            this.match(SelectParser.T__1);
            this.state = 59;
            this.match(SelectParser.CONSTANT);
            this.state = 64;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 65;
        this.match(SelectParser.T__3);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FieldsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SelectParser.RULE_fields;
    return this;
}

FieldsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldsContext.prototype.constructor = FieldsContext;

FieldsContext.prototype.subselect = function() {
    return this.getTypedRuleContext(SubselectContext,0);
};

FieldsContext.prototype.FIELD = function() {
    return this.getToken(SelectParser.FIELD, 0);
};

FieldsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SelectListener ) {
        listener.enterFields(this);
	}
};

FieldsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SelectListener ) {
        listener.exitFields(this);
	}
};

FieldsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SelectVisitor ) {
        return visitor.visitFields(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SelectParser.FieldsContext = FieldsContext;

SelectParser.prototype.fields = function() {

    var localctx = new FieldsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, SelectParser.RULE_fields);
    try {
        this.state = 69;
        switch(this._input.LA(1)) {
        case SelectParser.T__2:
            this.enterOuterAlt(localctx, 1);
            this.state = 67;
            this.subselect();
            break;
        case SelectParser.FIELD:
            this.enterOuterAlt(localctx, 2);
            this.state = 68;
            this.match(SelectParser.FIELD);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WhereContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SelectParser.RULE_where;
    return this;
}

WhereContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WhereContext.prototype.constructor = WhereContext;

WhereContext.prototype.conditionset = function() {
    return this.getTypedRuleContext(ConditionsetContext,0);
};

WhereContext.prototype.enterRule = function(listener) {
    if(listener instanceof SelectListener ) {
        listener.enterWhere(this);
	}
};

WhereContext.prototype.exitRule = function(listener) {
    if(listener instanceof SelectListener ) {
        listener.exitWhere(this);
	}
};

WhereContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SelectVisitor ) {
        return visitor.visitWhere(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SelectParser.WhereContext = WhereContext;

SelectParser.prototype.where = function() {

    var localctx = new WhereContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, SelectParser.RULE_where);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 71;
        this.match(SelectParser.T__7);
        this.state = 72;
        this.conditionset();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConditionsetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SelectParser.RULE_conditionset;
    return this;
}

ConditionsetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionsetContext.prototype.constructor = ConditionsetContext;

ConditionsetContext.prototype.condition = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConditionContext);
    } else {
        return this.getTypedRuleContext(ConditionContext,i);
    }
};

ConditionsetContext.prototype.conditionset = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConditionsetContext);
    } else {
        return this.getTypedRuleContext(ConditionsetContext,i);
    }
};

ConditionsetContext.prototype.and = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AndContext);
    } else {
        return this.getTypedRuleContext(AndContext,i);
    }
};

ConditionsetContext.prototype.or = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OrContext);
    } else {
        return this.getTypedRuleContext(OrContext,i);
    }
};

ConditionsetContext.prototype.enterRule = function(listener) {
    if(listener instanceof SelectListener ) {
        listener.enterConditionset(this);
	}
};

ConditionsetContext.prototype.exitRule = function(listener) {
    if(listener instanceof SelectListener ) {
        listener.exitConditionset(this);
	}
};

ConditionsetContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SelectVisitor ) {
        return visitor.visitConditionset(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SelectParser.ConditionsetContext = ConditionsetContext;

SelectParser.prototype.conditionset = function() {

    var localctx = new ConditionsetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, SelectParser.RULE_conditionset);
    var _la = 0; // Token type
    try {
        this.state = 101;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 79;
            switch(this._input.LA(1)) {
            case SelectParser.CONSTANT:
            case SelectParser.FIELD:
                this.state = 74;
                this.condition();
                break;
            case SelectParser.T__2:
                this.state = 75;
                this.match(SelectParser.T__2);
                this.state = 76;
                this.conditionset();
                this.state = 77;
                this.match(SelectParser.T__3);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 92; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 83;
                switch(this._input.LA(1)) {
                case SelectParser.T__5:
                    this.state = 81;
                    this.and();
                    break;
                case SelectParser.T__6:
                    this.state = 82;
                    this.or();
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                }
                this.state = 90;
                switch(this._input.LA(1)) {
                case SelectParser.CONSTANT:
                case SelectParser.FIELD:
                    this.state = 85;
                    this.condition();
                    break;
                case SelectParser.T__2:
                    this.state = 86;
                    this.match(SelectParser.T__2);
                    this.state = 87;
                    this.conditionset();
                    this.state = 88;
                    this.match(SelectParser.T__3);
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                }
                this.state = 94; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===SelectParser.T__5 || _la===SelectParser.T__6);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 96;
            this.match(SelectParser.T__2);
            this.state = 97;
            this.conditionset();
            this.state = 98;
            this.match(SelectParser.T__3);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 100;
            this.condition();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SelectParser.RULE_condition;
    return this;
}

ConditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionContext.prototype.constructor = ConditionContext;

ConditionContext.prototype.FIELD = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SelectParser.FIELD);
    } else {
        return this.getToken(SelectParser.FIELD, i);
    }
};


ConditionContext.prototype.OPERATOR = function() {
    return this.getToken(SelectParser.OPERATOR, 0);
};

ConditionContext.prototype.CONSTANT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SelectParser.CONSTANT);
    } else {
        return this.getToken(SelectParser.CONSTANT, i);
    }
};


ConditionContext.prototype.ARRAYOPERATOR = function() {
    return this.getToken(SelectParser.ARRAYOPERATOR, 0);
};

ConditionContext.prototype.arrayconstant = function() {
    return this.getTypedRuleContext(ArrayconstantContext,0);
};

ConditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof SelectListener ) {
        listener.enterCondition(this);
	}
};

ConditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof SelectListener ) {
        listener.exitCondition(this);
	}
};

ConditionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SelectVisitor ) {
        return visitor.visitCondition(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SelectParser.ConditionContext = ConditionContext;

SelectParser.prototype.condition = function() {

    var localctx = new ConditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, SelectParser.RULE_condition);
    try {
        this.state = 118;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 103;
            this.match(SelectParser.FIELD);
            this.state = 104;
            this.match(SelectParser.OPERATOR);
            this.state = 105;
            this.match(SelectParser.FIELD);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 106;
            this.match(SelectParser.FIELD);
            this.state = 107;
            this.match(SelectParser.OPERATOR);
            this.state = 108;
            this.match(SelectParser.CONSTANT);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 109;
            this.match(SelectParser.CONSTANT);
            this.state = 110;
            this.match(SelectParser.OPERATOR);
            this.state = 111;
            this.match(SelectParser.FIELD);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 112;
            this.match(SelectParser.CONSTANT);
            this.state = 113;
            this.match(SelectParser.OPERATOR);
            this.state = 114;
            this.match(SelectParser.CONSTANT);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 115;
            this.match(SelectParser.FIELD);
            this.state = 116;
            this.match(SelectParser.ARRAYOPERATOR);
            this.state = 117;
            this.arrayconstant();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.SelectParser = SelectParser;
