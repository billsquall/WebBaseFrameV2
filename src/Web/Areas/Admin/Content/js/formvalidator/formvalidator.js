﻿/// <reference path="../jquery.min.js" />
//====================================================================================================
// [插件名称] jQuery formValidator
// [作者网名] 猫冬	
// [邮    箱] wzmaodong@126.com
// [作者博客] http://wzmaodong.cnblogs.com
// [更新日期] 2008-01-24
// [版 本 号] ver3.3
// [修改记录] PHPCMS团队修正用于JQUERY 1.4
//====================================================================================================
var jQuery_formValidator_initConfig; (function ($) {
    $.formValidator = {
        sustainType: function (id, setting) {
            var elem = $("#" + id).get(0);
            var srcTag = elem.tagName;
            var stype = elem.type;
            switch (setting.validatetype) {
                case "InitValidator":
                    return true;
                case "InputValidator":
                    if (srcTag == "INPUT" || srcTag == "TEXTAREA" || srcTag == "SELECT") {
                        return true
                    } else {
                        return false
                    }
                case "CompareValidator":
                    if (srcTag == "INPUT" || srcTag == "TEXTAREA") {
                        if (stype == "checkbox" || stype == "radio") {
                            return false
                        } else {
                            return true
                        }
                    }
                    return false;
                case "AjaxValidator":
                    if (stype == "text" || stype == "textarea" || stype == "file" || stype == "password" || stype == "select-one") {
                        return true
                    } else {
                        return false
                    }
                case "RegexValidator":
                    if (srcTag == "INPUT" || srcTag == "TEXTAREA") {
                        if (stype == "checkbox" || stype == "radio") {
                            return false
                        } else {
                            return true
                        }
                    }
                    return false;
                case "FunctionValidator":
                    return true
            }
        },
        initConfig: function (controlOptions) {
            var settings = {
                debug: false,
                validatorgroup: "1",
                alertmessage: false,
                validobjectids: "",
                forcevalid: false,
                onsuccess: function () {
                    return true
                },
                onerror: function () { },
                submitonce: false,
                formid: "",
                autotip: false,
                tidymode: false,
                errorfocus: true,
                wideword: true
            };
            controlOptions = controlOptions || {};
            $.extend(settings, controlOptions);
            if (settings.tidymode) {
                settings.errorfocus = false
            };
            if (settings.formid != "") {
                $("#" + settings.formid).submit(function () {
                    return $.formValidator.pageIsValid("1")
                })
            };
            if (jQuery_formValidator_initConfig == null) {
                jQuery_formValidator_initConfig = new Array()
            }
            jQuery_formValidator_initConfig.push(settings)
        },
        appendValid: function (id, setting) {
            if (!$.formValidator.sustainType(id, setting)) return -1;
            var srcjo = $("#" + id).get(0);
            if (setting.validatetype == "InitValidator" || srcjo.settings == undefined) {
                srcjo.settings = new Array()
            }
            var len = srcjo.settings.push(setting);
            srcjo.settings[len - 1].index = len - 1;
            return len - 1
        },
        getInitConfig: function (validatorgroup) {
            if (jQuery_formValidator_initConfig != null) {
                for (i = 0; i < jQuery_formValidator_initConfig.length; i++) {
                    if (validatorgroup == jQuery_formValidator_initConfig[i].validatorgroup) {
                        return jQuery_formValidator_initConfig[i]
                    }
                }
            }
            return null
        },
        triggerValidate: function (returnObj) {
            switch (returnObj.setting.validatetype) {
                case "InputValidator":
                    $.formValidator.inputValid(returnObj);
                    break;
                case "CompareValidator":
                    $.formValidator.compareValid(returnObj);
                    break;
                case "AjaxValidator":
                    $.formValidator.ajaxValid(returnObj);
                    break;
                case "RegexValidator":
                    $.formValidator.regexValid(returnObj);
                    break;
                case "FunctionValidator":
                    $.formValidator.functionValid(returnObj);
                    break
            }
        },
        setTipState: function (elem, showclass, showmsg) {
            var setting0 = elem.settings[0];
            var initConfig = $.formValidator.getInitConfig(setting0.validatorgroup);
            var tip = $("#" + setting0.tipid);
            if (showmsg == null || showmsg == "") {
                tip.hide()
            } else {
                if (initConfig.tidymode) {
                    $("#fv_content").html(showmsg);
                    elem.Tooltip = showmsg;
                    if (showclass != "onError") {
                        tip.hide()
                    }
                }
                tip.removeClass();
                tip.addClass(showclass);
                tip.html(showmsg)
            }
        },
        resetTipState: function (validatorgroup) {
            var initConfig = $.formValidator.getInitConfig(validatorgroup);
            $(initConfig.validobjectids).each(function () {
                $.formValidator.setTipState(this, "onShow", this.settings[0].onshow)
            })
        },
        setFailState: function (tipid, showmsg) {
            var tip = $("#" + tipid);
            tip.removeClass();
            tip.addClass("onError");
            tip.html(showmsg)
        },
        showMessage: function (returnObj) {
            var id = returnObj.id;
            var elem = $("#" + id).get(0);
            var isvalid = returnObj.isvalid;
            var setting = returnObj.setting;
            var showmsg = "",
			showclass = "";
            var settings = $("#" + id).get(0).settings;
            var intiConfig = $.formValidator.getInitConfig(settings[0].validatorgroup);
            if (!isvalid) {
                showclass = "onError";
                if (setting.validatetype == "AjaxValidator") {
                    if (setting.lastValid == "") {
                        showclass = "onLoad";
                        showmsg = setting.onwait
                    } else {
                        showmsg = setting.onerror
                    }
                } else {
                    showmsg = (returnObj.errormsg == "" ? setting.onerror : returnObj.errormsg)
                }
                if (intiConfig.alertmessage) {
                    var elem = $("#" + id).get(0);
                    if (elem.validoldvalue != $(elem).val()) {
                        alert(showmsg)
                    }
                } else {
                    $.formValidator.setTipState(elem, showclass, showmsg)
                }
            } else {
                showmsg = $.formValidator.isEmpty(id) ? setting.onempty : setting.oncorrect;
                $.formValidator.setTipState(elem, "onCorrect", showmsg)
            }
            return showmsg
        },
        showAjaxMessage: function (returnObj) {
            var setting = returnObj.setting;
            var elem = $("#" + returnObj.id).get(0);
            if ((elem.settings[returnObj.ajax].cached ? elem.validoldvalue != $(elem).val() : true)) {
                $.formValidator.ajaxValid(returnObj)
            } else {
                if (setting.isvalid != undefined && !setting.isvalid) {
                    elem.lastshowclass = "onError";
                    elem.lastshowmsg = setting.onerror
                }
                $.formValidator.setTipState(elem, elem.lastshowclass, elem.lastshowmsg)
            }
        },
        getLength: function (id) {
            var srcjo = $("#" + id);
            var elem = srcjo.get(0);
            sType = elem.type;
            var len = 0;
            switch (sType) {
                case "text":
                case "hidden":
                case "password":
                case "textarea":
                case "file":
                    var val = srcjo.val();
                    var initConfig = $.formValidator.getInitConfig(elem.settings[0].validatorgroup);
                    if (initConfig.wideword) {
                        for (var i = 0; i < val.length; i++) {
                            if (val.charCodeAt(i) >= 0x4e00 && val.charCodeAt(i) <= 0x9fa5) {
                                len += 2
                            } else {
                                len++
                            }
                        }
                    } else {
                        len = val.length
                    }
                    break;
                case "checkbox":
                case "radio":
                    len = $("input[type='" + sType + "'][name='" + srcjo.attr("name") + "']:checked").length;
                    break;
                case "select-one":
                    len = elem.options ? elem.options.selectedIndex : -1;
                    break;
                case "select-multiple":
                    len = $("select[name=" + elem.name + "] option:selected").length;
                    break
            }
            return len
        },
        isEmpty: function (id) {
            if ($("#" + id).get(0).settings[0].empty && $.formValidator.getLength(id) == 0) {
                return true
            } else {
                return false
            }
        },
        isOneValid: function (id) {
            return $.formValidator.oneIsValid(id, 1).isvalid
        },
        oneIsValid: function (id, index) {
            var returnObj = new Object();
            returnObj.id = id;
            returnObj.ajax = -1;
            returnObj.errormsg = "";
            var elem = $("#" + id).get(0);
            var settings = elem.settings;
            var settingslen = settings.length;
            if (settingslen == 1) {
                settings[0].bind = false
            }
            if (!settings[0].bind) {
                return null
            }
            for (var i = 0; i < settingslen; i++) {
                if (i == 0) {
                    if ($.formValidator.isEmpty(id)) {
                        returnObj.isvalid = true;
                        returnObj.setting = settings[0];
                        break
                    }
                    continue
                }
                returnObj.setting = settings[i];
                if (settings[i].validatetype != "AjaxValidator") {
                    $.formValidator.triggerValidate(returnObj)
                } else {
                    returnObj.ajax = i
                }
                if (!settings[i].isvalid) {
                    returnObj.isvalid = false;
                    returnObj.setting = settings[i];
                    break
                } else {
                    returnObj.isvalid = true;
                    returnObj.setting = settings[0];
                    if (settings[i].validatetype == "AjaxValidator") break
                }
            }

            //Michael 修改
            if ($("#" + id).is("select") || $("#" + id).is(":text") || $("#" + id).is("textarea")) {
                if (!returnObj.isvalid)
                    $("#" + id).parents(".controls:first").children().first().css("border", "1px solid #ff0000").css("border-radius", "5px");
                else
                    $("#" + id).parents(".controls:first").children().first().css("border", "1px solid #ccc").css("border-radius", "5px");
            }
            //end
            return returnObj;
        },
        pageIsValid: function (validatorgroup) {
            if (validatorgroup == null || validatorgroup == undefined) {
                validatorgroup = "1"
            };
            var isvalid = true;
            var thefirstid = "",
			thefirsterrmsg;
            var returnObj, setting;
            var error_tip = "^";
            var initConfig = $.formValidator.getInitConfig(validatorgroup);
            var jqObjs = $(initConfig.validobjectids);
            jqObjs.each(function (i, elem) {
                if (elem.settings[0].bind) {
                    returnObj = $.formValidator.oneIsValid(elem.id, 1);
                    if (returnObj) {
                        var tipid = elem.settings[0].tipid;
                        if (!returnObj.isvalid) {
                            isvalid = false;
                            if (thefirstid == "") {
                                thefirstid = returnObj.id;
                                thefirsterrmsg = (returnObj.errormsg == "" ? returnObj.setting.onerror : returnObj.errormsg)
                            }
                        }
                        if (!initConfig.alertmessage) {
                            if (error_tip.indexOf("^" + tipid + "^") == -1) {
                                if (!returnObj.isvalid) {
                                    error_tip = error_tip + tipid + "^"
                                }
                                $.formValidator.showMessage(returnObj)
                            }
                        }
                    }
                }
            });
            if (isvalid) {
                isvalid = initConfig.onsuccess();
                if (initConfig.submitonce) {
                    $("input[type='submit']").attr("disabled", true);
                }
            } else {
                var obj = $("#" + thefirstid).get(0);
                initConfig.onerror(thefirsterrmsg, obj);
                if (thefirstid != "" && initConfig.errorfocus) {
                    $("#" + thefirstid).focus()
                }
            }
            return !initConfig.debug && isvalid
        },
        ajaxValid: function (returnObj) {
            var id = returnObj.id;
            var srcjo = $("#" + id);
            var elem = srcjo.get(0);
            var settings = elem.settings;
            var setting = settings[returnObj.ajax];
            var ls_url = setting.url;
            if (srcjo.size() == 0 && settings[0].empty) {
                returnObj.setting = settings[0];
                returnObj.isvalid = true;
                $.formValidator.showMessage(returnObj);
                setting.isvalid = true;
                return
            }
            if (setting.addidvalue) {
                var parm = "clientid=" + id + "&" + id + "=" + encodeURIComponent(srcjo.val());
                if (setting.getdata) {
                    $.each(setting.getdata,
					function (i, n) {
					    parm += "&" + i + "=" + $('#' + n).val()
					})
                }
                ls_url = ls_url + (ls_url.indexOf("?") > 0 ? ("&" + parm) : ("?" + parm))
            }
            $.ajax({
                mode: "abort",
                type: setting.type,
                url: ls_url,
                cache: setting.cache,
                data: setting.data,
                async: setting.async,
                dataType: setting.datatype,
                success: function (data) {
                    if (setting.success(data)) {
                        $.formValidator.setTipState(elem, "onCorrect", settings[0].oncorrect);
                        setting.isvalid = true
                    } else {
                        $.formValidator.setTipState(elem, "onError", setting.onerror);
                        setting.isvalid = false
                    }
                },
                complete: function () {
                    if (setting.buttons && setting.buttons.length > 0) {
                        setting.buttons.attr({
                            "disabled": false
                        })
                    };
                    setting.complete
                },
                beforeSend: function (xhr) {
                    if (setting.buttons && setting.buttons.length > 0) {
                        setting.buttons.attr({
                            "disabled": true
                        })
                    };
                    var isvalid = setting.beforesend(xhr);
                    if (isvalid) {
                        setting.isvalid = false;
                        $.formValidator.setTipState(elem, "onLoad", settings[returnObj.ajax].onwait)
                    }
                    setting.lastValid = "-1";
                    return isvalid
                },
                error: function () {
                    $.formValidator.setTipState(elem, "onError", setting.onerror);
                    setting.isvalid = false;
                    setting.error()
                },
                processData: setting.processdata
            })
        },
        regexValid: function (returnObj) {
            var id = returnObj.id;
            var setting = returnObj.setting;
            var srcTag = $("#" + id).get(0).tagName;
            var elem = $("#" + id).get(0);
            if (elem.settings[0].empty && elem.value == "") {
                setting.isvalid = true
            } else {
                var regexpress = setting.regexp;
                if (setting.datatype == "enum") {
                    regexpress = eval("regexEnum." + regexpress)
                }
                if (regexpress == undefined || regexpress == "") {
                    setting.isvalid = false;
                    return
                }
                setting.isvalid = (new RegExp(regexpress, setting.param)).test($("#" + id).val())
            }
        },
        functionValid: function (returnObj) {
            var id = returnObj.id;
            var setting = returnObj.setting;
            var srcjo = $("#" + id);
            var lb_ret = setting.fun(srcjo.val(), srcjo.get(0));
            if (lb_ret != undefined) {
                if (typeof lb_ret == "string") {
                    setting.isvalid = false;
                    returnObj.errormsg = lb_ret
                } else {
                    setting.isvalid = lb_ret
                }
            }
        },
        inputValid: function (returnObj) {
            var id = returnObj.id;
            var setting = returnObj.setting;
            var srcjo = $("#" + id);
            var elem = srcjo.get(0);
            var val = srcjo.val();
            var sType = elem.type;
            var len = $.formValidator.getLength(id);
            var empty = setting.empty,
			emptyerror = false;
            switch (sType) {
                case "text":
                case "hidden":
                case "password":
                case "textarea":
                case "file":
                    if (setting.type == "size") {
                        empty = setting.empty;
                        if (!empty.leftempty) {
                            emptyerror = (val.replace(/^[ \s]+/, '').length != val.length)
                        }
                        if (!emptyerror && !empty.rightempty) {
                            emptyerror = (val.replace(/[ \s]+$/, '').length != val.length)
                        }
                        if (emptyerror && empty.emptyerror) {
                            returnObj.errormsg = empty.emptyerror
                        }
                    }
                case "checkbox":
                case "select-one":
                case "select-multiple":
                case "radio":
                    var lb_go_on = false;
                    if (sType == "select-one" || sType == "select-multiple") {
                        setting.type = "size"
                    }
                    var type = setting.type;
                    if (type == "size") {
                        if (!emptyerror) {
                            lb_go_on = true
                        }
                        if (lb_go_on) {
                            val = len
                        }
                    } else if (type == "date" || type == "datetime") {
                        var isok = false;
                        if (type == "date") {
                            lb_go_on = isDate(val)
                        };
                        if (type == "datetime") {
                            lb_go_on = isDate(val)
                        };
                        if (lb_go_on) {
                            val = new Date(val);
                            setting.min = new Date(setting.min);
                            setting.max = new Date(setting.max)
                        }
                    } else {
                        stype = (typeof setting.min);
                        if (stype == "number") {
                            val = (new Number(val)).valueOf();
                            if (!isNaN(val)) {
                                lb_go_on = true
                            }
                        }
                        if (stype == "string") {
                            lb_go_on = true
                        }
                    }
                    setting.isvalid = false;
                    if (lb_go_on) {
                        if (val < setting.min || val > setting.max) {
                            if (val < setting.min && setting.onerrormin) {
                                returnObj.errormsg = setting.onerrormin
                            }
                            if (val > setting.min && setting.onerrormax) {
                                returnObj.errormsg = setting.onerrormax
                            }
                        } else {
                            setting.isvalid = true
                        }
                    }
                    break
            }
        },
        compareValid: function (returnObj) {
            var id = returnObj.id;
            var setting = returnObj.setting;
            var srcjo = $("#" + id);
            var desjo = $("#" + setting.desid);
            var ls_datatype = setting.datatype;
            setting.isvalid = false;
            curvalue = srcjo.val();
            ls_data = desjo.val();
            if (ls_datatype == "number") {
                if (!isNaN(curvalue) && !isNaN(ls_data)) {
                    curvalue = parseFloat(curvalue);
                    ls_data = parseFloat(ls_data)
                } else {
                    return
                }
            }
            if (ls_datatype == "date" || ls_datatype == "datetime") {
                var isok = false;
                if (ls_datatype == "date") {
                    isok = (isDate(curvalue) && isDate(ls_data))
                };
                if (ls_datatype == "datetime") {
                    isok = (isDateTime(curvalue) && isDateTime(ls_data))
                };
                if (isok) {
                    curvalue = new Date(curvalue);
                    ls_data = new Date(ls_data)
                } else {
                    return
                }
            }
            switch (setting.operateor) {
                case "=":
                    if (curvalue == ls_data) {
                        setting.isvalid = true
                    }
                    break;
                case "!=":
                    if (curvalue != ls_data) {
                        setting.isvalid = true
                    }
                    break;
                case ">":
                    if (curvalue > ls_data) {
                        setting.isvalid = true
                    }
                    break;
                case ">=":
                    if (curvalue >= ls_data) {
                        setting.isvalid = true
                    }
                    break;
                case "<":
                    if (curvalue < ls_data) {
                        setting.isvalid = true
                    }
                    break;
                case "<=":
                    if (curvalue <= ls_data) {
                        setting.isvalid = true
                    }
                    break
            }
        },
        localTooltip: function (e) {
            e = e || window.event;
            var mouseX = e.pageX || (e.clientX ? e.clientX + document.body.scrollLeft : 0);
            var mouseY = e.pageY || (e.clientY ? e.clientY + document.body.scrollTop : 0);
            $("#fvtt").css({
                "top": (mouseY + 2) + "px",
                "left": (mouseX - 40) + "px"
            })
        }
    };
    $.fn.formValidator = function (cs) {
        var setting = {
            validatorgroup: "1",
            empty: false,
            submitonce: false,
            automodify: false,
            onshow: "*",
            onfocus: "*",
            oncorrect: " ",
            onempty: "*",
            defaultvalue: "",
            bind: true,
            validatetype: "InitValidator",
            tipcss: {
                "left": "10px",
                "top": "1px",
                "height": "20px",
                "width": "250px"
            },
            triggerevent: "blur",
            forcevalid: false
        };
        cs = cs || {};
        if (cs.validatorgroup == undefined) {
            cs.validatorgroup = "1"
        };
        if (cs.empty == true) {
            cs.onshow = " ",
			cs.onfocus = " ",
			cs.onempty = " "
        };

        var initConfig = $.formValidator.getInitConfig(cs.validatorgroup);
        if (initConfig.tidymode) {
            setting.tipcss = {
                "left": "2px",
                "width": "22px",
                "height": "22px",
                "display": "none"
            }
        };
        $.extend(true, setting, cs);
        return this.each(function (e) {
            var jqobj = $(this);
            var setting_temp = {};
            $.extend(true, setting_temp, setting);
            var tip = setting_temp.tipid ? setting_temp.tipid : this.id + "Tip";
            if (initConfig.autotip) {
                if ($("body [id=" + tip + "]").length == 0) {
                    aftertip = setting_temp.relativeid ? setting_temp.relativeid : this.id;
                    /*************************修改这里*****************************************/
                    if ($('#' + aftertip).attr("error") != "alert" || $('#' + aftertip).attr("error") == undefined) {
                        var control_group = $('#' + aftertip).parents(".control-group:first");
                        var control_label = $('#' + aftertip).parents(".control-group:first").find(".control-label");
                        var control_form = $('#' + aftertip).parents("form:first")
                        if (control_label.length > 0 && !control_form.hasClass("form-horizontal")) {
                            control_label.append("<span id='" + tip + "'></span>");
                        } else {
                            $('#' + aftertip).parent().append("<span id='" + tip + "'></span>");
                        }
                    }
                    /*******************************************************************/
                }
                if (initConfig.tidymode) {
                    jqobj.showTooltips()
                }
            }
            setting.tipid = tip;
            $.formValidator.appendValid(this.id, setting);
            var validobjectids = initConfig.validobjectids;
            if (validobjectids.indexOf("#" + this.id + " ") == -1) {
                initConfig.validobjectids = (validobjectids == "" ? "#" + this.id : validobjectids + ",#" + this.id)
            }
            if (!initConfig.alertmessage) {
                $.formValidator.setTipState(this, "onShow", setting.onshow)
            }
            var srcTag = this.tagName.toLowerCase();
            var stype = this.type;
            var defaultval = setting.defaultvalue;
            if (defaultval) {
                jqobj.val(defaultval)
            }
            if (srcTag == "input" || srcTag == "textarea") {
                jqobj.focus(function () {
                    if (!initConfig.alertmessage) {
                        var tipjq = $("#" + tip);
                        this.lastshowclass = tipjq.attr("class");
                        this.lastshowmsg = tipjq.html();
                        $.formValidator.setTipState(this, "onFocus", setting.onfocus)
                    }
                });
                jqobj.bind(setting.triggerevent,
				function () {
				    var settings = this.settings;
				    var returnObj = $.formValidator.oneIsValid(this.id, 1);
				    if (returnObj == null) {
				        return
				    }
				    if (returnObj.ajax >= 0) {
				        $.formValidator.showAjaxMessage(returnObj)
				    } else {
				        var showmsg = $.formValidator.showMessage(returnObj);
				        if (!returnObj.isvalid) {
				            var auto = setting.automodify && (this.type == "text" || this.type == "textarea" || this.type == "file");
				            if (auto && !initConfig.alertmessage) {
				                alert(showmsg);
				                $.formValidator.setTipState(this, "onShow", setting.onshow)
				            } else {
				                if (initConfig.forcevalid || setting.forcevalid) {
				                    alert(showmsg);
				                    this.focus()
				                }
				            }
				        }
				    }
				})
            } else if (srcTag == "select") {
                jqobj.bind("focus",
				function () {
				    if (!initConfig.alertmessage) {
				        $.formValidator.setTipState(this, "onFocus", setting.onfocus)
				    }
				});
                jqobj.bind("blur",
				function () {
				    jqobj.trigger("change")
				});
                jqobj.bind("change",
				function () {
				    var returnObj = $.formValidator.oneIsValid(this.id, 1);
				    if (returnObj == null) {
				        return
				    }
				    if (returnObj.ajax >= 0) {
				        $.formValidator.showAjaxMessage(returnObj)
				    } else {
				        $.formValidator.showMessage(returnObj)
				    }
				})
            }
        })
    };
    $.fn.inputValidator = function (controlOptions) {
        var settings = {
            isvalid: false,
            min: 0,
            max: 99999999999999,
            type: "size",
            onerror: "*",
            validatetype: "InputValidator",
            empty: {
                leftempty: true,
                rightempty: true,
                leftemptyerror: null,
                rightemptyerror: null
            },
            wideword: true
        };
        controlOptions = controlOptions || {};
        $.extend(true, settings, controlOptions);
        return this.each(function () {
            $.formValidator.appendValid(this.id, settings)
        })
    };
    $.fn.compareValidator = function (controlOptions) {
        var settings = {
            isvalid: false,
            desid: "",
            operateor: "=",
            onerror: "错误",
            validatetype: "CompareValidator"
        };
        controlOptions = controlOptions || {};
        $.extend(true, settings, controlOptions);
        return this.each(function () {
            $.formValidator.appendValid(this.id, settings)
        })
    };
    $.fn.regexValidator = function (controlOptions) {
        var settings = {
            isvalid: false,
            regexp: "",
            param: "i",
            datatype: "string",
            onerror: "格式错误",
            validatetype: "RegexValidator"
        };
        controlOptions = controlOptions || {};
        $.extend(true, settings, controlOptions);
        return this.each(function () {
            $.formValidator.appendValid(this.id, settings)
        })
    };
    $.fn.functionValidator = function (controlOptions) {
        var settings = {
            isvalid: true,
            fun: function () {
                this.isvalid = true
            },
            validatetype: "FunctionValidator",
            onerror: "错误"
        };
        controlOptions = controlOptions || {};
        $.extend(true, settings, controlOptions);
        return this.each(function () {
            $.formValidator.appendValid(this.id, settings)
        })
    };
    $.fn.ajaxValidator = function (controlOptions) {
        var settings = {
            isvalid: false,
            lastValid: "",
            type: "GET",
            url: "",
            addidvalue: true,
            datatype: "html",
            data: "",
            async: true,
            cache: false,
            cached: true,
            getdata: '',
            beforesend: function () {
                return true
            },
            success: function () {
                return true
            },
            complete: function () { },
            processdata: false,
            error: function () { },
            buttons: null,
            onerror: "服务器校验没有通过",
            onwait: "正在等待服务器返回数据",
            validatetype: "AjaxValidator"
        };
        controlOptions = controlOptions || {};
        $.extend(true, settings, controlOptions);
        return this.each(function () {
            $.formValidator.appendValid(this.id, settings)
        })
    };
    $.fn.defaultPassed = function (onshow) {
        return this.each(function () {
            var settings = this.settings;
            for (var i = 1; i < settings.length; i++) {
                settings[i].isvalid = true;
                if (!$.formValidator.getInitConfig(settings[0].validatorgroup).alertmessage) {
                    var ls_style = onshow ? "onShow" : "onCorrect";
                    $.formValidator.setTipState(this, ls_style, settings[0].oncorrect)
                }
            }
        })
    };
    $.fn.unFormValidator = function (unbind) {
        return this.each(function () {
            this.settings[0].bind = !unbind;
            if (unbind) {
                $("#" + this.settings[0].tipid).hide()
            } else {
                $("#" + this.settings[0].tipid).show()
            }
        })
    };
    $.fn.showTooltips = function () {
        if ($("body [id=fvtt]").length == 0) {
            fvtt = $("<div id='fvtt' style='position:absolute;z-index:56002'></div>");
            $("body").append(fvtt);
            fvtt.before("<iframe src='about:blank' class='fv_iframe' scrolling='no' frameborder='0'></iframe>")
        }
        return this.each(function () {
            jqobj = $(this);
            s = $("<span class='top' id=fv_content style='display:block'></span>");
            b = $("<b class='bottom' style='display:block' />");
            this.tooltip = $("<span class='fv_tooltip' style='display:block'></span>").append(s).append(b).css({
                "filter": "alpha(opacity:95)",
                "KHTMLOpacity": "0.95",
                "MozOpacity": "0.95",
                "opacity": "0.95"
            });
            jqobj.mouseover(function (e) {
                $("#fvtt").append(this.tooltip);
                $("#fv_content").html(this.Tooltip);
                $.formValidator.localTooltip(e)
            });
            jqobj.mouseout(function () {
                $("#fvtt").empty()
            });
            jqobj.mousemove(function (e) {
                $("#fv_content").html(this.Tooltip);
                $.formValidator.localTooltip(e)
            })
        })
    }
})(jQuery);