(ns lt.plugins.chir
  (:require [lt.objs.editor :as ed]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd]
            [lt.objs.proc :as proc]
            [lt.object :as object]
            [lt.objs.sidebar.clients :as scl]
            [lt.objs.sidebar.command :as scmd]
            [lt.objs.dialogs :as dialogs]
            [lt.objs.console :as console]
            [lt.objs.notifos :as notifos]
            [lt.plugins.watches :as watches]
            [lt.util.load :as load]
            [lt.objs.files :as files]
            [lt.objs.plugins :as plugins]
            [lt.objs.clients :as clients]
            [lt.objs.clients.tcp :as tcp]
            [lt.objs.popup :as popup]
            [lt.objs.eval :as eval]
            [lt.objs.platform :as platform]
            [clojure.string :as string])
  (:require-macros [lt.macros :refer [behavior]]))

(defn log [s]
  (.log js/console s))

(def r-exist (atom nil))

(def shell (load/node-module "shelljs"))
(def plugin-dir (plugins/find-plugin "chir"))
(def r-path "Rterm")
(def sent-items (atom 0))
(def r-help (atom ""))

;; create an rterm process

(def cp (js/require "child_process"))
(def spawn (.-spawn cp))
(defn create-r-proc []
  (if (nil? @r-exist)
    (do (reset! r-exist (spawn "rterm" #js ["--ess" "--slave"])))
    nil)
  @r-exist)

(defn r-write [rcon s]
  (.stdin.write rcon (str s "\n")))

(defn r-read [rcon]
  (let [ou (.stdout.read rcon)]
    (if-not (nil? ou)
      (.toString ou)
      "")))

(defn r-stderr [rcon]
  (let [ou (.stderr.read rcon)]
    (if-not (nil? ou)
      (.toString ou)
      "")))
(defn kill [rcon]
  (.kill rcon))

(behavior ::on-eval.one
          :desc "R: Eval current selection"
          :triggers #{:eval.one}
          :reaction (fn [editor]
                      (let [pos (ed/->cursor editor)
                            info (conj (:info @editor)
                                  (if (ed/selection? editor)
                                    {:code (ed/selection editor) :meta {:start (-> (ed/->cursor editor "start") :line)
                                                                        :end (-> (ed/->cursor editor "end") :line)}}

                                    {:pos pos :code (ed/line editor (:line pos)) :meta {:start (:line pos) :end (:line pos)}}
                                    ))]
                        (object/raise r :eval! {:origin editor :info info}))

                      ))

(behavior ::eval!
          :triggers #{:eval!}
          :reaction (fn [this event]
                      (create-r-proc)

                      (let [{:keys [info origin]} event
                            code (get-code info)
                            start (get-start info)
                            end (get-end info)
                            ]
                        (when (r-write @r-exist code)
                          (object/raise origin :editor.result.underline (r-read @r-exist) {:line end :start-line start})
                          )
                        )))

(object/object* ::r-lang
                :tags #{:r.lang})

(def r (object/create ::r-lang))

;; code specs
(defn get-code [info]
  (:code info))

(defn get-start [info]
  (-> info :meta :start))

(defn get-end [info]
  (-> info :meta :end))
