if(!lt.util.load.provided_QMARK_('lt.plugins.chir')) {
goog.provide('lt.plugins.chir');
goog.require('cljs.core');
goog.require('lt.objs.plugins');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.files');
goog.require('lt.objs.platform');
goog.require('lt.objs.popup');
goog.require('lt.objs.dialogs');
goog.require('lt.objs.popup');
goog.require('lt.objs.notifos');
goog.require('lt.objs.proc');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('clojure.string');
goog.require('lt.objs.command');
goog.require('lt.objs.platform');
goog.require('lt.objs.files');
goog.require('lt.objs.clients.tcp');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.plugins');
goog.require('lt.plugins.watches');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.clients.tcp');
goog.require('lt.util.load');
goog.require('clojure.string');
goog.require('lt.objs.sidebar.command');
goog.require('lt.plugins.watches');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.dialogs');
goog.require('lt.util.load');
goog.require('lt.objs.console');
goog.require('lt.objs.proc');
goog.require('lt.objs.console');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');
lt.plugins.chir.log = (function log(s){return console.log(s);
});
lt.plugins.chir.r_exist = cljs.core.atom.call(null,null);
lt.plugins.chir.shell = lt.util.load.node_module.call(null,"shelljs");
lt.plugins.chir.plugin_dir = lt.objs.plugins.find_plugin.call(null,"chir");
lt.plugins.chir.r_path = "Rterm";
lt.plugins.chir.sent_items = cljs.core.atom.call(null,0);
lt.plugins.chir.r_help = cljs.core.atom.call(null,"");
lt.plugins.chir.cp = require("child_process");
lt.plugins.chir.spawn = lt.plugins.chir.cp.spawn;
lt.plugins.chir.create_r_proc = (function create_r_proc(){if((cljs.core.deref.call(null,lt.plugins.chir.r_exist) == null))
{cljs.core.reset_BANG_.call(null,lt.plugins.chir.r_exist,lt.plugins.chir.spawn.call(null,"rterm",["--ess","--slave"]));
} else
{}
return cljs.core.deref.call(null,lt.plugins.chir.r_exist);
});
lt.plugins.chir.r_write = (function r_write(rcon,s){return rcon.stdin.write([cljs.core.str(s),cljs.core.str("\n")].join(''));
});
lt.plugins.chir.r_read = (function r_read(rcon){var ou = rcon.stdout.read();if(!((ou == null)))
{return ou.toString();
} else
{return "";
}
});
lt.plugins.chir.r_stderr = (function r_stderr(rcon){var ou = rcon.stderr.read();if(!((ou == null)))
{return ou.toString();
} else
{return "";
}
});
lt.plugins.chir.kill = (function kill(rcon){return rcon.kill();
});
lt.plugins.chir.__BEH__on_eval__DOT__one = (function __BEH__on_eval__DOT__one(editor){var pos = lt.objs.editor.__GT_cursor.call(null,editor);var info = cljs.core.conj.call(null,new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)),(cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,editor))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.selection.call(null,editor),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,editor,"start")),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,editor,"end"))], null)], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",1014015430),pos,new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.line.call(null,editor,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos)),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos)], null)], null)));return lt.object.raise.call(null,lt.plugins.chir.r,new cljs.core.Keyword(null,"eval!","eval!",1110791799),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),info], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chir","on-eval.one","lt.plugins.chir/on-eval.one",1581170386),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chir.__BEH__on_eval__DOT__one,new cljs.core.Keyword(null,"desc","desc",1016984067),"R: Eval current selection",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval.one","eval.one",1173589382),null], null), null));
lt.plugins.chir.__BEH__eval_BANG_ = (function __BEH__eval_BANG_(this$,event){lt.plugins.chir.create_r_proc.call(null);
var map__7958 = event;var map__7958__$1 = ((cljs.core.seq_QMARK_.call(null,map__7958))?cljs.core.apply.call(null,cljs.core.hash_map,map__7958):map__7958);var origin = cljs.core.get.call(null,map__7958__$1,new cljs.core.Keyword(null,"origin","origin",4300251800));var info = cljs.core.get.call(null,map__7958__$1,new cljs.core.Keyword(null,"info","info",1017141280));var code = lt.plugins.chir.get_code.call(null,info);var start = lt.plugins.chir.get_start.call(null,info);var end = lt.plugins.chir.get_end.call(null,info);if(cljs.core.truth_(lt.plugins.chir.r_write.call(null,cljs.core.deref.call(null,lt.plugins.chir.r_exist),code)))
{return lt.object.raise.call(null,origin,new cljs.core.Keyword(null,"editor.result.underline","editor.result.underline",541343758),lt.plugins.chir.r_read.call(null,cljs.core.deref.call(null,lt.plugins.chir.r_exist)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),end,new cljs.core.Keyword(null,"start-line","start-line",3689311729),start], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chir","eval!","lt.plugins.chir/eval!",4525172885),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.chir.__BEH__eval_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval!","eval!",1110791799),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.chir","r-lang","lt.plugins.chir/r-lang",3446525689),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"r.lang","r.lang",4323423580),null], null), null));
lt.plugins.chir.r = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.chir","r-lang","lt.plugins.chir/r-lang",3446525689));
lt.plugins.chir.get_code = (function get_code(info){return new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(info);
});
lt.plugins.chir.get_start = (function get_start(info){return new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(info));
});
lt.plugins.chir.get_end = (function get_end(info){return new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(info));
});
}

//# sourceMappingURL=chir_compiled.js.map