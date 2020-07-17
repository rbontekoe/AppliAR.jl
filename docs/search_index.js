var documenterSearchIndex = {"docs":
[{"location":"chapter1/#.-Domain-objects","page":"1 - Domain","title":"1. Domain objects","text":"","category":"section"},{"location":"chapter1/#invoice-id","page":"1 - Domain","title":"invoice id","text":"","category":"section"},{"location":"chapter1/","page":"1 - Domain","title":"1 - Domain","text":"id","category":"page"},{"location":"chapter1/#AppliAR.Domain.id","page":"1 - Domain","title":"AppliAR.Domain.id","text":"id(i::Invoice)\n\nReturns the id of an invoice.\n\nexample\n\njulia> using AppliSales\n\njulia> using AppliAR\n\njulia> orders = AppliSales.process();\n\njulia> AppliAR.process(orders);\n\njulia> unpaid_invoices = AppliAR.retrieve_unpaid_invoices();\n\njulia> id(unpaid_invoices[1])\n\"A1001\"\n\n\n\n\n\n","category":"function"},{"location":"chapter1/#meta-information","page":"1 - Domain","title":"meta information","text":"","category":"section"},{"location":"chapter1/","page":"1 - Domain","title":"1 - Domain","text":"meta","category":"page"},{"location":"chapter1/#AppliAR.Domain.meta","page":"1 - Domain","title":"AppliAR.Domain.meta","text":"meta(i::Invoice)\n\nReturns the meta data of an invoice.\n\nexample\n\njulia> using AppliSales\n\njulia> using AppliAR\n\njulia> orders = AppliSales.process();\n\njulia> AppliAR.process(orders);\n\njulia> unpaid_invoices = AppliAR.retrieve_unpaid_invoices();\n\njulia> m = AppliAR.meta(unpaid_invoices[1])\nMetaInvoice(\"9715406426271665630\", \"LS\", 2020-07-14T16:56:33.194, \"€\", 1.0)\n\njulia> orderid = order_id(m)\n\"9715406426271665630\"\n\njulia> trainingid = training_id(m)\n\"LS\"\n\njulia> date(m)\n2020-07-14T16:56:33\n\njulia> currency(m)\n\"€\"\n\njulia> currency_ratio(m)\n1.0\n\n\n\n\n\n","category":"function"},{"location":"chapter1/#header-data","page":"1 - Domain","title":"header data","text":"","category":"section"},{"location":"chapter1/","page":"1 - Domain","title":"1 - Domain","text":"header","category":"page"},{"location":"chapter1/#AppliAR.Domain.header","page":"1 - Domain","title":"AppliAR.Domain.header","text":"header(i::Invoice)\n\nReturns the header of an invoice.\n\nexample\n\njulia> using AppliSales\n\njulia> using AppliAR\n\njulia> orders = AppliSales.process();\n\njulia> AppliAR.process(orders);\n\njulia> unpaid_invoices = AppliAR.retrieve_unpaid_invoices();\n\njulia> h = header(unpaid_invoices[1])\nHeader(\"A1001\", \"Scrooge Investment Bank\", \"1180 Seven Seas Dr\", \"FL 32830\", \"Lake Buena Vista\", \"USA\", \"PO-456\", \"Scrooge McDuck\", \"scrooge@duckcity.com\")\n\njulia> invoice_nbr(h)\n\"A1001\"\n\njulia> name(h)\n\"Scrooge Investment Bank\"\n\njulia> address(h)\n\"1180 Seven Seas Dr\"\n\njulia> postal_code(h)\n\"FL 32830\"\n\njulia> city(h)\n\"Lake Buena Vista\"\n\njulia> country(h)\n\"USA\"\n\njulia> order_ref(h)\n\"PO-456\"\n\njulia> name_contact(h)\n\"Scrooge McDuck\n\njulia> email_contact(h)\n\"scrooge@duckcity.com\"\n\n\n\n\n\n","category":"function"},{"location":"chapter1/#body-data","page":"1 - Domain","title":"body data","text":"","category":"section"},{"location":"chapter1/","page":"1 - Domain","title":"1 - Domain","text":"body","category":"page"},{"location":"chapter1/#AppliAR.Domain.body","page":"1 - Domain","title":"AppliAR.Domain.body","text":"body(i::Invoice)\n\nReturns the body of an invoice.\n\nexample\n\njulia> using AppliSales\n\njulia> using AppliAR\n\njulia> orders = AppliSales.process();\n\njulia> AppliAR.process(orders);\n\njulia> unpaid_invoices = AppliAR.retrieve_unpaid_invoices();\n\njulia> b = body(unpaid_invoices[1])\nOpentrainingItem(\"Learn Smiling\", 2019-08-30T00:00:00, 1000.0, [\"Scrooge McDuck\"], 0.21)\n\njulia> name_training(b)\n\"Learn Smiling\"\n\njulia> date(b)\n2019-08-30T00:00:00\n\njulia> price_per_student(b)\n1000.0\n\njulia> students(b)\n1-element Array{String,1}:\n\"Scrooge McDuck\"\n\njulia> vat_perc(b)\n0.21\n\n\n\n\n\n","category":"function"},{"location":"chapter1/#stm-bank-statement-belonging-to-a-paid-invoice","page":"1 - Domain","title":"stm - bank statement belonging to a paid invoice","text":"","category":"section"},{"location":"chapter1/","page":"1 - Domain","title":"1 - Domain","text":"stm","category":"page"},{"location":"chapter1/#AppliAR.Domain.stm","page":"1 - Domain","title":"AppliAR.Domain.stm","text":"stm(i::PaidInvoice)\n\nReturns the Bankstatement of a paid invoice.\n\n\n\n\n\n","category":"function"},{"location":"chapter2/#.-API-functions-(developers)","page":"2 - API","title":"2. API functions (developers)","text":"","category":"section"},{"location":"chapter2/#create","page":"2 - API","title":"create","text":"","category":"section"},{"location":"chapter2/","page":"2 - API","title":"2 - API","text":"AppliAR.API.create","category":"page"},{"location":"chapter2/#AppliAR.API.create","page":"2 - API","title":"AppliAR.API.create","text":"create(::AppliSales.Order, invoice_id::String)::UnpaidInvoice\n\ncreate(::UnpaidInvoice, ::AppliGeneralLedger.BankStatement)::PaidInvoice\n\nCreate an UnpaidInvoice from an AppliSales.Order.\nCreate a PaidInvoice from an UnpaidInvoice and a BankStatement.\n\n@see also conv2entry\n\nExample - create an UnpaidInvoice\n\njulia> using AppliAR\n\njulia> using AppliSales\n\njulia> invnbr = 1000\n\njulia> invoices = [create(order, \"A\" * string(global invnbr += 1)) for order in orders]\n\nExample - create a PaidInvoice\n\njulia> using Dates\n\njulia> using AppliSales\n\njulia> using AppliAR\n\njulia> const PATH_CSV = \"./bank.csv\";\n\njulia> invnbr = 1000;\n\njulia> orders = AppliSales.process();\n\njulia> invoices = [create(order, \"A\" * string(global invnbr += 1)) for order in orders];\n\njulia> stm1 = BankStatement(Date(2020-01-15), \"Duck City Chronicals Invoice A1002\", \"NL93INGB\", 2420.0);\n\njulia> stms = [stm1];\n\njulia> paid_invoices = PaidInvoice[];\n\njulia> for unpaid_invoice in invoices\n          for s in stms # get potential paid invoices\n             if occursin(id(unpaid_invoice), descr(s)) # description contains invoice number\n                push!(paid_invoices, create(unpaid_invoice, s))\n             end\n          end\n      end;\n\njulia> println(paid_invoices);\n\n\n\n\n\n","category":"function"},{"location":"chapter2/#conv2entry","page":"2 - API","title":"conv2entry","text":"","category":"section"},{"location":"chapter2/","page":"2 - API","title":"2 - API","text":"AppliAR.API.conv2entry","category":"page"},{"location":"chapter2/#AppliAR.API.conv2entry","page":"2 - API","title":"AppliAR.API.conv2entry","text":"conv2entry(inv::UnpaidInvoice, from::Int, to::Int)\n\nconv2entry(inv::PaidInvoice, from::Int, to::Int)\n\nConvert an Invoice to a AppliGeneralLedger.JournalEntry.\n\n\n\n\n\n","category":"function"},{"location":"chapter4/","page":"4 - Example","title":"4 - Example","text":"Example (user)","category":"page"},{"location":"chapter4/#Example-from-the-course-BAWJ","page":"4 - Example","title":"Example from the course BAWJ","text":"","category":"section"},{"location":"chapter4/#Actor-schema-actors.jl","page":"4 - Example","title":"Actor schema actors.jl","text":"","category":"section"},{"location":"chapter4/","page":"4 - Example","title":"4 - Example","text":"                           StmActor\n                              |\n                              | BankStatement(s)\n                              ↓       \n       SalesActor -------> ARActor -------> GLActor\n                  Order(s)    ↑    Entry(s)    ↑\n                              ↓                ↓\n                            Store            Store","category":"page"},{"location":"chapter4/","page":"4 - Example","title":"4 - Example","text":"All actors run in main\nARActor (Accounts Receivable Actor) next-code runs in container\nGLActor (General Ledger Actor) next-code runs in container","category":"page"},{"location":"chapter4/#The-code","page":"4 - Example","title":"The code","text":"","category":"section"},{"location":"chapter4/","page":"4 - Example","title":"4 - Example","text":"# test_with_actors.jl\n\nusing Pkg\nPkg.activate(\".\")\nPkg.precompile()\n\nusing Rocket\n\n@info(\"Start docker containers\")\ncmd = `docker start test_sshd`\nrun(cmd)\n\ncmd = `docker start test_sshd2`\nrun(cmd)\n\ncmd = `docker ps`\nrun(cmd)\n\nsleep(5)\n\n@info(\"Enable distrbuted computing\")\nusing Distributed\n\n@info(\"Connect to containers\")\naddprocs([(\"rob@172.17.0.2\", 1)]; exeflags=`--project=$(Base.active_project())`, tunnel=true, dir=\"/home/rob\")\naddprocs([(\"rob@172.17.0.3\", 1)]; exeflags=`--project=$(Base.active_project())`, tunnel=true, dir=\"/home/rob\")\n\n@info(\"Assign process ids to the containers\")\ngl_pid = procs()[2] # general ledger\nar_pid = procs()[3] # accounts receivable (orders/bankstatements)\n\n@info(\"Activate the packages\")\n@everywhere begin\n    using AppliSales\n    using AppliGeneralLedger\n    using AppliAR\n    using Query\nend;\n\n@info(\"Load actors\")\ninclude(\"./actors.jl\")\n\n@info(\"Activate actors\")\nsales_actor = SalesActor()\nar_actor = ARActor(ar_pid)\ngl_actor = GLActor(gl_pid)\nstm_actor = StmActor()\n\n@info(\"Start the application\")\nsubscribe!(from([\"START\"]), sales_actor)\n\n@info(\"Process payments\")\nsubscribe!(from([\"READ_STMS\"]), stm_actor)\n\n@info(\"Display the result\")\nusing DataFrames\n\n# print aging report\nr1 = @fetchfrom ar_pid report()\nresult = DataFrame(r1)\nprintln(\"\\nUnpaid invoices\\n===============\")\n@show(result)\n\n# print general ledger accounts 1300, 8000, 1150, and 4000\nr2 = @fetchfrom gl_pid AppliGeneralLedger.read_from_file(\"./test_ledger.txt\")\ndf = DataFrame(r2)\n#println(\"\\nGeneral Ledger mutations\\n========================\")\n#@show(df)\n\ndf2 = r2 |> @filter(_.accountid == 1300) |> DataFrame\nbalance_1300 = sum(df2.debit - df2.credit)\n\ndf2 = df |> @filter(_.accountid == 8000) |> DataFrame\nbalance_8000 = sum(df2.credit - df2.debit)\n\ndf2 = df |> @filter(_.accountid == 1150) |> DataFrame\nbalance_1150 = sum(df2.debit - df2.credit)\n\ndf2 = df |> @filter(_.accountid == 4000) |> DataFrame\nbalance_4000 = sum(df2.credit - df2.debit)\n\nprintln(\"\")\nprintln(\"Balance Accounts Receivable is $balance_1300. $(balance_1300 == 1210 ? \"Is correct.\" : \"Should be 1210.\")\")\nprintln(\"Sales is $balance_8000. $(balance_8000 == 4000 ? \"Is correct.\" : \"Should be 4000.\")\")\nprintln(\"Balance bank is $balance_1150. $(balance_1150 == 3630 ? \"Is correct.\" : \"Should be 3630.0.\")\")\nprintln(\"Balance VAT is $balance_4000. $(balance_4000 == 840 ? \"Is correct.\" : \"Should be 840.0.\")\")\n\n# open shell in container\ncmd = `ssh rob@172.17.0.2`\n@info(\"after run(cmd) is activated: goto console, press Enter, and rm test* files. Leave the container with Ctrl-D\")\nrun(cmd)\n\n# open shell in container\ncmd = `ssh rob@172.17.0.3`\n@info(\"after run(cmd) is activated: goto console, press Enter, and rm test* invoicenbr.txt. Leave the container with Ctrl-D\")\nrun(cmd)\n@info(\"Ctrl-L to clean the consule. Close julia with Ctrl-D.\")\n\n# end\n","category":"page"},{"location":"chapter4/#actors.jl","page":"4 - Example","title":"actors.jl","text":"","category":"section"},{"location":"chapter4/","page":"4 - Example","title":"4 - Example","text":"# actors.jl\n\nusing Rocket\n\nstruct StmActor <: Actor{String} end\nRocket.on_next!(actor::StmActor, data::String) = begin\n    if data == \"READ_STMS\"\n        stms = AppliAR.read_bank_statements(\"./bank.csv\")\n        @show(stms)\n        subscribe!(from(stms), ar_actor)\n    end\nend\nRocket.on_complete!(actor::StmActor) = @info(\"StmActor completed!\")\nRocket.on_error!(actor::StmActor, err) = @info(error(err))\n\nstruct SalesActor <: Actor{String} end\nRocket.on_next!(actor::SalesActor, data::String) = begin\n    if data == \"START\"\n        #ar_actor = ARActor()\n        orders = @fetch AppliSales.process()\n        subscribe!(from(orders), ar_actor)\n    end\nend\nRocket.on_complete!(actor::SalesActor) = @info(\"SalesActor completed!\")\nRocket.on_error!(actor::SalesActor, err) = @info(error(err))\n\nstruct ARActor <: Actor{Any}\n    ar_pid::Int64\n    ARActor(ar_pid) = new(ar_pid)\nend\nRocket.on_next!(actor::ARActor, data::AppliSales.Order) = begin\n        d = @fetchfrom actor.ar_pid AppliAR.process([data])\n        subscribe!(from(d), gl_actor)\nend\nRocket.on_next!(actor::ARActor, data::AppliAR.BankStatement) = begin\n        unpaid_inv = @fetchfrom actor.ar_pid retrieve_unpaid_invoices()\n        entries = @fetchfrom actor.ar_pid AppliAR.process(unpaid_inv, [data])\n        subscribe!(from(entries), gl_actor)\nend\nRocket.on_complete!(actor::ARActor) = begin\n    @info(\"ARActor Completed!\")\nend\nRocket.on_error!(actor::ARActor, err) = @info(error(err))\n\nstruct GLActor <: Actor{Any}\n    gl_pid::Int64\n    GLActor(gl_pid) = new(gl_pid)\nend\nRocket.on_next!(actor::GLActor, data::Any) = begin\n    if data isa AppliGeneralLedger.JournalEntry\n        result = @fetchfrom actor.gl_pid AppliGeneralLedger.process([data])\n    end\nend\nRocket.on_complete!(actor::GLActor) = @info(\"GLActor completed!\")\nRocket.on_error!(actor::GLActor, err) = @info(error(err))\n","category":"page"},{"location":"chapter4/#Output","page":"4 - Example","title":"Output","text":"","category":"section"},{"location":"chapter4/","page":"4 - Example","title":"4 - Example","text":"Press Enter to start a new session.\nStarting Julia...\n               _\n   _       _ _(_)_     |  Documentation: https://docs.julialang.org\n  (_)     | (_) (_)    |\n   _ _   _| |_  __ _   |  Type \"?\" for help, \"]?\" for Pkg help.\n  | | | | | | |/ _` |  |\n  | | |_| | | | (_| |  |  Version 1.3.1 (2019-12-30)\n _/ |\\__'_|_|_|\\__'_|  |  Official https://julialang.org/ release\n|__/                   |\n environment at `~/julia-projects/tc/AppliMaster/Project.toml`\nPrecompiling project...\n[ Info: Start docker containers\ntest_sshd\ntest_sshd2\nCONTAINER ID        IMAGE               COMMAND               CREATED             STATUS              PORTS                   NAMES\n5d281627d29d        eg_sshd             \"/usr/sbin/sshd -D\"   7 months ago        Up 2 hours          0.0.0.0:32769->22/tcp   test_sshd2\n13304c03391d        eg_sshd             \"/usr/sbin/sshd -D\"   7 months ago        Up 2 hours          0.0.0.0:32768->22/tcp   test_sshd\n[ Info: Enable distrbuted computing\n[ Info: Connect to containers\n[ Info: Remove processes > 3\n[ Info: Assign process ids to the containers\n[ Info: Activate the packages\n[ Info: Load actors\n[ Info: Activate actors\n[ Info: Start the application\n[ Info: GLActor completed!\n[ Info: GLActor completed!\n[ Info: GLActor completed!\n[ Info: ARActor Completed!\n[ Info: SalesActor completed!\n[ Info: Process payments\nBankStatement[BankStatement(2020-01-15, \"Duck City Chronicals Invoice A1002\", \"NL93INGB\", 2420.0), BankStatement(2020-01-15, \"Donalds Hardware Store Bill A1003\", \"NL39INGB\", 1210.0)]\n[ Info: GLActor completed!\n[ Info: GLActor completed!\n[ Info: ARActor Completed!\n[ Info: StmActor completed!\n[ Info: Display the result\n\nUnpaid invoices\n===============\n1×5 DataFrame\n│ Row │ id_inv │ csm                     │ inv_date   │ amount  │ days   │\n│     │ String │ String                  │ Dates.Date │ Float64 │ Dates… │\n├─────┼────────┼─────────────────────────┼────────────┼─────────┼────────┤\n│ 1   │ A1001  │ Scrooge Investment Bank │ 2020-07-17 │ 1210.0  │ 0 days │\n\nBalance Accounts Receivable is 1210.0. Is correct.\nSales is 4000.0. Is correct.\nBalance bank is 3630.0. Is correct.\nBalance VAT is 840.0. Is correct.\n","category":"page"},{"location":"chapter3/#.-Infrastructure-functions","page":"3 - Infrastructure","title":"3. Infrastructure functions","text":"","category":"section"},{"location":"chapter3/#process","page":"3 - Infrastructure","title":"process","text":"","category":"section"},{"location":"chapter3/","page":"3 - Infrastructure","title":"3 - Infrastructure","text":"process","category":"page"},{"location":"chapter3/#AppliAR.Infrastructure.process","page":"3 - Infrastructure","title":"AppliAR.Infrastructure.process","text":"process(::Array{AppliSales.Order, 1}; path=\"./test_invoices.sqlite\")\n\nprocess(::Array{UnpaidInvoice, 1}, ::Array{AppliGeneralLedger.BankStatement, 1}; path=\"./test_invoices.sqlite\")\n\nCreates UnpaidInvoice's from AppliSale.Order's, archive them, and creates AppliGeneralLedger.Entry's for the general ledger.\nCreates PaidInvoices's from UnpaidInvoices by using AppliGeneralLedger.BankStatement's, and creates AppliGeneralLedger.Entry's for the general ledger.\n\nExample\n\njulia> using AppliSales\n\njulia> using AppliGeneralLedger\n\njulia> using AppliAR\n\njulia> const PATH_CSV = \"./bank.csv\"\n\njulia> orders = AppliSales.process()\n\njulia> journal_entries_1 = AppliAR.process(orders)\n\njulia> stms = AppliAR.read_bank_statements(PATH_CSV)\n\njulia> unpaid_invoices = AppliAR.retrieve_unpaid_invoices()\n\njulia> journal_entries_2 = AppliAR.process(unpaid_invoices, stms)\n\njulia> cmd = `rm test_invoicing.txt test_invoicing_paid.txt invoicenbr.txt`\n\njulia> run(cmd)\n\n\n\n\n\n","category":"function"},{"location":"chapter3/#retrieve_unpaid_invoices","page":"3 - Infrastructure","title":"retrieve_unpaid_invoices","text":"","category":"section"},{"location":"chapter3/","page":"3 - Infrastructure","title":"3 - Infrastructure","text":"retrieve_unpaid_invoices","category":"page"},{"location":"chapter3/#AppliAR.Infrastructure.retrieve_unpaid_invoices","page":"3 - Infrastructure","title":"AppliAR.Infrastructure.retrieve_unpaid_invoices","text":"retrieve_unpaid_invoices(;path=\"./test_invoicing.txt\")::Array{UnpaidInvoice, 1}\n\nRetrieves UnpaidInvoice's from a text file.\n\nExample\n\njulia> using AppliSales\n\njulia> using AppliAR\n\njulia> orders = AppliSales.process()\n\njulia> AppliAR.process(orders)\n\njulia> unpaid_invoices = retrieve_unpaid_invoices()\n\njulia> cmd = `rm test_invoicing.txt invoicenbr.txt`\n\njulia> run(cmd)\n\n\n\n\n\n","category":"function"},{"location":"chapter3/#read_bank_statements","page":"3 - Infrastructure","title":"read_bank_statements","text":"","category":"section"},{"location":"chapter3/","page":"3 - Infrastructure","title":"3 - Infrastructure","text":"read_bank_statements","category":"page"},{"location":"chapter3/#AppliAR.Infrastructure.read_bank_statements","page":"3 - Infrastructure","title":"AppliAR.Infrastructure.read_bank_statements","text":"read_bank_statements(path::String)\n\nRetrieves bank statements from a CSV-file.\n\nExample\n\njulia> const PATH_CSV = \"./bank.csv\"\n\njulia> stms = AppliAR.read_bank_statements(PATH_CSV)\n\n\n\n\n\n","category":"function"},{"location":"chapter3/#retrieve_paid_invoices","page":"3 - Infrastructure","title":"retrieve_paid_invoices","text":"","category":"section"},{"location":"chapter3/","page":"3 - Infrastructure","title":"3 - Infrastructure","text":"retrieve_paid_invoices","category":"page"},{"location":"chapter3/#AppliAR.Infrastructure.retrieve_paid_invoices","page":"3 - Infrastructure","title":"AppliAR.Infrastructure.retrieve_paid_invoices","text":"retrieve_paid_invoices(;path=\"./test_invoicing_paid.txt\")::Array{PaidInvoice, 1}\n\nRetrieves PaidInvoice's from a text file.\n\nExample\n\njulia> using AppliSales\n\njulia> using AppliAR\n\njulia> orders = AppliSales.process()\n\njulia> AppliAR.process(orders)\n\njulia> unpaid_invoices = retrieve_unpaid_invoices()\n\njulia> const PATH_CSV = \"./bank.csv\"\n\njulia> stms = AppliAR.read_bank_statements(PATH_CSV)\n\njulia> AppliAR.process(unpaid_invoices, stms)\n\njulia> paid_invoices = AppliAR.retrieve_paid_invoices()\n\njulia> cmd = `rm test_invoicing.txt test_invoicing_paid.txt invoicenbr.txt`\n\njulia> run(cmd)\n\n\n\n\n\n","category":"function"},{"location":"#AppliAR.jl","page":"Accounts Receivable","title":"AppliAR.jl","text":"","category":"section"},{"location":"","page":"Accounts Receivable","title":"Accounts Receivable","text":"","category":"page"},{"location":"","page":"Accounts Receivable","title":"Accounts Receivable","text":"Modules = [AppliAR]","category":"page"},{"location":"#AppliAR.report-Tuple{}","page":"Accounts Receivable","title":"AppliAR.report","text":"report\n\nGenerate an aging report\n\nExample\n\njulia> using Dates\n\njulia> using AppliSales\n\njulia> using AppliAR\n\njulia> orders = AppliSales.process();\n\njulia> AppliAR.process(orders);\n\njulia> stm1 = BankStatement(Date(2020-01-15), \"Duck City Chronicals Invoice A1002\", \"NL93INGB\", 2420.0);\n\njulia> stms = [stm1];\n\njulia> AppliAR.process(unpaid_invoices, stms);\n\njulia> r = report()\n2-element Array{Any,1}:\n AppliAR.Reporting.Aging(\"A1001\", \"Scrooge Investment Bank\", 2020-07-14, 1210.0, 0 days)\n AppliAR.Reporting.Aging(\"A1003\", \"Donalds Hardware Store\", 2020-07-14, 1210.0, 0 days)\n\n\n\n\n\n","category":"method"}]
}
