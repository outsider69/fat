var child_process = require("child_process");
var fs = require("fs");
//var { version } = require("./package.json");

console.log("Start build .....");

fs.existsSync("log") || fs.mkdirSync("log");
//fs.existsSync("dist") || fs.mkdirSync("dist");

var flag_str = "";
var language_out;

var options = (function(argv){

    var arr = {};
    var count = 0;

    argv.forEach(function(val, index) {

        if(++count > 2){

            index = val.split("=");
            val = index[1];
            index = index[0].toUpperCase();

            if(index === "LANGUAGE_OUT"){

                language_out = val;
            }
            else if(index === "RELEASE"){

                arr[index] = val;
            }
            else{

                flag_str += " --define='" + index + "=" + val + "'";

                arr[index] = val;
            }

            if(count > 3) console.log(index + ": " + val);
        }
    });

    console.log("RELEASE: " + (arr["RELEASE"] || "custom"));

    return arr;

})(process.argv);

var parameter = (function(opt){

    var parameter = "";

    for(var index in opt){

        if(opt.hasOwnProperty(index)){

            parameter += " --" + index + "=" + opt[index];
        }
    }

    return parameter;
})({

    compilation_level: "ADVANCED", //"WHITESPACE"
    use_types_for_optimization: true,
    new_type_inf: true,
    jscomp_warning: "newCheckTypes",
    //jscomp_warning: "strictCheckTypes",
    jscomp_error: "checkTypes",
    generate_exports: true,
    export_local_property_definitions: true,
    language_in: "ECMASCRIPT6_STRICT",
    language_out: language_out || "ECMASCRIPT5_STRICT",
    process_closure_primitives: true,
    summary_detail_level: 3,
    warning_level: "VERBOSE",
    emit_use_strict: true,
    assume_function_wrapper: true,
    //rename_prefix_namespace: "",
    //isolation_mode: "IIFE",
    //disambiguate_properties: true,
    //ambiguate_properties: true,
    //replace_strings: true,
    //output_wrapper: "(function() {%output%}).call(window);",
    output_manifest: "log/manifest.log",
    output_module_dependencies: "log/module_dependencies.log",
    property_renaming_report: "log/renaming_report.log"
    //formatting: "PRETTY_PRINT"
});

var release = options["RELEASE"];

if(release === "demo"){

    options["RELEASE"] = "custom";
}

var custom = (!options["RELEASE"] || (options["RELEASE"] === "custom"));

if(custom){

    options["RELEASE"] = "custom." + hashCode(parameter + flag_str);
}

exec("java -jar node_modules/google-closure-compiler-java/compiler.jar" + parameter + " --js='fat.js'" + flag_str + " --js_output_file='fat." + (options["RELEASE"] || "custom") + ".js' && exit 0", function(){

    var filename = "fat." + (options["RELEASE"] || "custom") + ".js";

    console.log("Build Complete: " + filename);

    if(release === "demo"){

        //fs.existsSync("dist/") || fs.mkdirSync("dist/");
        //fs.existsSync("dist/latest") || fs.mkdirSync("dist/latest");

        fs.copyFileSync(filename, "docs/" + filename);
        //fs.copyFileSync(filename, "dist/latest/" + filename);
        fs.unlinkSync(filename);
    }
});

function hashCode(str) {

    var hash = 0, i, chr;

    if(str.length === 0){

        return hash;
    }

    for(i = 0; i < str.length; i++){

        chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
    }

    hash = Math.abs(hash) >> 0;

    return hash.toString(16).substring(0, 5);
}

function exec(prompt, callback){

    var child = child_process.exec(prompt, function(err /*, stdout, stderr*/){

        if(err){

            console.log(err);
        }
        else{

            if(callback){

                callback();
            }
        }
    });

    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
}
