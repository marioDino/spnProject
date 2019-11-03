/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function GoToOnPage(Page, data, buttonActive) {
$.ajax({
url: Page,
        method: "GET",
        data: data,
        dataType: 'html',
        success: function (data, status) {
        $('#container').html(data);
                ActiveMenu(buttonActive);
        },
        error: function (data, status) {
        $("#container").html('<div id="page-wrapper"><div class="container-fluid"><div class="row"><h1 style="paddingg: 20px">Erreur lors de chargement de la page</h1></div></div></div>');
        }

})
}

function ActiveMenu(buttonActive) {
let Object = [{menu: "#Accueil"}, {menu: "#Client"}, {menu: "#Verser"}, {menu: "#Retrait"}, {menu: "#Transfer"}, {menu: "#Bilan"}];
        for (let i = 0; i < Object.length; i++) {
if (Object[i].menu == buttonActive) {
$(buttonActive).addClass("active");
        } else {
$(Object[i].menu).attr("class", "");
        }
}
}

// Ajouter CLient 

$("#actionC").click(function Crude() {
var Action = document.getElementById("actionC").name;
        let Id_Client = $("#Id_Client").val();
        let Nom_Client = $("#Nom_Client").val();
        let Adresse_Client = $("#Adresse_Client").val();
        let Contact_Client = $("#Contact_Client").val();
        let Solde_Client = $("#Solde_Client").val();
        //let Url_Image_Client = $("#Url_Image_Client").val();
        let Url_Image_Client = "johny.png";
        let data = {
        "action": Action,
                "Id_Client": Id_Client,
                "Nom_Client": Nom_Client,
                "Adresse_Client": Adresse_Client,
                "Contact_Client": Contact_Client,
                "Solde_Client": Solde_Client,
                "Url_Image_Client": Url_Image_Client
        };
        AjaxServlet("../ServletClient", data, "#erreur");
        setTimeout(function () {
        AjaxGetPage("Client.jsp", null, "#container");
        }, 500);
        switch (Action){

case "add":  ActionAlert("Ajout avec success", "success");
        break;
        case "edit": ActionAlert("Modification avec success", "success");
        break;
        case"delete": ActionAlert("Suppression avec success", "success");
        break;
        default:  ActionAlert("Erreur", "error");
        break;
}
});
//Function getData In table

        function getDataInTableClient(ligne) {
        let data = [
        {"data": ligne.cells[0].innerText},
        {"data": ligne.cells[1].innerText},
        {"data": ligne.cells[2].innerText},
        {"data": ligne.cells[3].innerText},
        {"data": ligne.cells[4].innerText},
        {"data": "johny.png"}
        ];
                if (data !== null) {
        SetDataInFormClient(data);
        } else {
        alert("Donne Vide");
        }
        }

function resetFormClient() {
document.getElementById("actionC").name = "add";
        let form = document.getElementById("formCLient");
        var i = 0;
        for (; i < form.length; i++) {
form[i].value = "";
        }
}

//Editer Client

function SetDataInFormClient(data) {
document.getElementById("actionC").name = "edit";
        let form = document.getElementById("formCLient");
        var i = 0;
        for (; i < form.length; i++) {
form[i].value = data[i].data;
        }
}

//Delet client

function DeleteClient(ligne) {
document.getElementById("delete").setAttribute("onclick", "confirmeDeleteClient('" + ligne.cells[0].innerText + "','" + ligne.cells[1].innerText + "','" + ligne.cells[2].innerText + "','" + ligne.cells[3].innerText + "','" + ligne.cells[4].innerText + "','johny.png')");
}

//COnfirm delete client

function confirmeDeleteClient(Id_Client, Nom_Client, Adresse_Client, Contact_Client, Solde_Client, Url_Image_Client) {
let data = {
"action": "delete",
        "Id_Client": Id_Client,
        "Nom_Client": Nom_Client,
        "Adresse_Client": Adresse_Client,
        "Contact_Client": Contact_Client,
        "Solde_Client": Solde_Client,
        "Url_Image_Client": Url_Image_Client
        };
        AjaxServlet("../ServletClient", data, "#erreur");
        setTimeout(function () {
        AjaxGetPage("Client.jsp", null, "#container");
        }, 2000);
        ActionAlert("Suppression avec success", "success");
}

// Ajax

function AjaxServlet(Page, data, Id) {
$.ajax({
url: Page,
        method: "POST",
        data: data,
        dataType: 'html',
        success: function (data, status) {
        $(Id).html(data);
        },
        error: function (data, status) {
        $(Id).html('<div id="page-wrapper"><div class="container-fluid"><div class="row"><h1 style="paddingg: 20px">Erreur Serveur</h1></div></div></div>');
        }
});
}

function AjaxGetPage(Page, data, Id) {
$.ajax({
url: Page,
        method: "GET",
        data: data,
        dataType: 'html',
        success: function (data, status) {
        $(Id).html(data);
        },
        error: function (data, status) {
        $(Id).html('<div id="page-wrapper"><div class="container-fluid"><div class="row"><h1 style="paddingg: 20px">Erreur lors de chargement de la page</h1></div></div></div>');
        }
});
}


/* Concernant Versement */


// Ajouter Versement 

$("#actionV").click(function Crude() {
var Action = document.getElementById("actionV").name;
        let Id_Client = $("#Id_Client").val();
        let Nom_Personne = $("#Nom_Personne").val();
        let Adresse_Personne = $("#Adresse_Personne").val();
        let Contact_Personne = $("#Contact_Personne").val();
        let Montant_Versement = $("#Montant_Versement").val();
        let Date_Versement = $("#Date_Versement").val();
        let Id_Versement = $("#Id_Versement").val();
        let OldMontant_Versement = $("#OldMontant_Versement").val();
        let data = {
        "action": Action,
                "Id_Client": Id_Client,
                "Nom_Personne": Nom_Personne,
                "Adresse_Personne": Adresse_Personne,
                "Contact_Personne": Contact_Personne,
                "Montant_Versement": Montant_Versement,
                "Date_Versement" : Date_Versement,
                "Id_Versement" : Id_Versement,
                "OldMontant_Versement" : OldMontant_Versement
        };
        console.log(data);
        AjaxServlet("../ServletVersement", data, "#erreur");
        setTimeout(function () {
        AjaxGetPage("Versement.jsp", null, "#container");
        }, 500);
        switch (Action){

case "add":  ActionAlert("Ajout avec success", "success");
        break;
        case "edit": ActionAlert("Modification avec success", "success");
        break;
        case"delete": ActionAlert("Suppression avec success", "success");
        break;
        default:  ActionAlert("Erreur", "error");
        break;
}
});
        function resetFormVerser() {
        document.getElementById("actionV").name = "add";
                let form = document.getElementById("formVerser");
                var i = 0;
                for (; i < form.length - 2; i++) {
        form[i].value = "";
        }
        }

function setDataInFormVerser(ligne, Id_Personne, Nom_Personne, Adresse_Personne, Contact_Personne){
$("#Id_Versement").val(ligne.cells[0].innerText);
        $("#Id_Client").val(ligne.cells[1].innerText);
        $("#Date_Versement").val(ligne.cells[3].innerText);
        $("#Montant_Versement").val(ligne.cells[4].innerText);
        $("#Id_Personne").val(Id_Personne);
        $("#Nom_Personne").val(Nom_Personne);
        $("#Adresse_Personne").val(Adresse_Personne);
        $("#Contact_Personne").val(Contact_Personne);
        $("#OldMontant_Versement").val(ligne.cells[4].innerText);
        document.getElementById("actionV").name = "edit";
}

function DeleteVerser(ligne){
document.getElementById("delete").setAttribute("onclick", "confirmeDeleteVerser('" + ligne.cells[0].innerText + "','" + ligne.cells[4].innerText + "')");
}

function confirmeDeleteVerser(Id_Versement, Montant_Versement){
let data = {
"action": "delete",
        "Id_Versement": Id_Versement,
        "Montant_Versement": Montant_Versement
        };
        AjaxServlet("../ServletVersement", data, "#erreur");
        setTimeout(function () {
        AjaxGetPage("Versement.jsp", null, "#container");
        }, 2000);
        ActionAlert("Suppression avec success", "success");
}


//Concernent Retrait 

// Ajouter Versement 

$("#actionR").click(function Crude() {
var Action = document.getElementById("actionR").name;
        let Num_Cheque = $("#Num_Cheque").val();
        let Id_Client = $("#Id_Client").val();
        let Nom_Personne = $("#Nom_Personne").val();
        let Adresse_Personne = $("#Adresse_Personne").val();
        let Contact_Personne = $("#Contact_Personne").val();
        let Montant_Retrait = $("#Montant_Retrait").val();
        let Date_Retrait = $("#Date_Retrait").val();
        let Id_Retrait = $("#Id_Retrait").val();
        let OldMontant_Retrait = $("#OldMontant_Retrait").val();
        let data = {
        "action": Action,
                "Num_Cheque": Num_Cheque,
                "Id_Client": Id_Client,
                "Nom_Personne": Nom_Personne,
                "Adresse_Personne": Adresse_Personne,
                "Contact_Personne": Contact_Personne,
                "Montant_Retrait": Montant_Retrait,
                "Date_Retrait" : Date_Retrait,
                "Id_Retrait" : Id_Retrait,
                "OldMontant_Retrait" : OldMontant_Retrait
        };
        console.log(data);
        AjaxServlet("../ServletRetrait", data, "#erreur");
        setTimeout(function () {
        AjaxGetPage("Retrait.jsp", null, "#container");
        }, 500);
        switch (Action){

case "add": ActionAlert("Ajout avec success", "success");
        break;
        case "edit": ActionAlert("Modification avec success", "success");
        break;
        case"delete": ActionAlert("Suppression avec success", "success");
        break;
        default:  ActionAlert("Erreur", "error");
        break;
}
});
        function resetFormRetrait(){
        document.getElementById("actionR").name = "add";
                let form = document.getElementById("formRetrait");
                var i = 0;
                for (; i < form.length - 2; i++) {
        form[i].value = "";
        }
        }

$("#actionT").click(function Crude() {
var Action = document.getElementById("actionT").name;
        let Id_Transfer = $("#Id_Transfer").val();
        let Id_Client_Source = $("#Id_Client_Source").val();
        let Id_Client_Destinnataire = $("#Id_Client_Destinnataire").val();
        let Montant_Transfer = $("#Montant_Transfer").val();
        let Date_Transfer = $("#Date_Transfer").val();
        let data = {
        "action": Action,
                "Id_Transfer": Id_Transfer,
                "Num_Compte": Id_Client_Source,
                "Num_Compte_1": Id_Client_Destinnataire,
                "Montant_Transfer": Montant_Transfer,
                "Date_Transfer": Date_Transfer
        };
        console.log(data);
        AjaxServlet("../ServletTransfer", data, "#erreur");
        setTimeout(function () {
        AjaxGetPage("Transfer.jsp", null, "#container");
        }, 500);
        switch (Action){

case "add":  ActionAlert("Ajout avec success", "success");
        break;
        case "edit": ActionAlert("Modification avec success", "success");
        break;
        case"delete": ActionAlert("Suppression avec success", "success");
        break;
        default:  ActionAlert("Erreur", "error");
        break;
}
});
        function resetFormTransfer(){
        document.getElementById("actionT").name = "add";
                let form = document.getElementById("formTransfer");
                var i = 1;
                for (; i < form.length - 1; i++) {
        form[i].value = "";
        }
        $("#Id_Transfers").hide();
        }

function ActionAlert(Message, action){
$.notify(Message, action);
}

function VerifierSolde(value, Page, Id, IdInput){
let Id_Client = $(IdInput).val();
        $.ajax({
        url: Page,
                method: "GET",
                data: "Montant=" + value + "&Id_Client=" + Id_Client,
                dataType: 'html',
                success: function (data, status) {
                if (parseInt(data) < parseInt(value)){
                $('#info').html("<p style='color: red'>Solde insuffisant (reste = " + parseInt(data) + " Ar )</p>");
                        $(Id).hide();
                } else{
                $('#info').html("<p style='color: black'>Solde suffisant</p>");
                        $(Id).show();
                }


                },
                error: function (data, status) {
                // $("#container").html('<div id="page-wrapper"><div class="container-fluid"><div class="row"><h1 style="paddingg: 20px">Erreur lors de chargement de la page</h1></div></div></div>');
                }
        })
}


function Recherche(Page, Id){
var option = $('#option').val();
        var Id_Client_R = $("#Id_Client_RS").val();
        console.log($("#Id_Client_R").val());
        switch (option){
case "2":
        var dateDebut = $("#dateDebut").val();
        var dateFin = $("#dateFin").val();
        if (dateDebut != "" && dateFin != ""){
var data = {"option": "deuxdate", "Id_Client": Id_Client_R, "dateDebut": dateDebut, "dateFin": dateFin };
        AjaxGetPage(Page, data, Id);
}

break;
        case "3":
        var Annee = $("#Annnee").val();
        if (Annee.length == 4){
var data = { "option": "Annee", "Id_Client": Id_Client_R, "Annee": Annee };
        AjaxGetPage(Page, data, Id);
}

break;
        default :

        break;
        }

}

function ComboSwitch(value){
switch (value){
case "2": $('#debut').show(); $('#fin').show(); $('#Annee').hide(); $('#Id_Client_R').show();
        break;
        case "3": $('#debut').hide(); $('#fin').hide(); $('#Annee').show(); $('#Id_Client_R').show();
        break;
        default : $('#debut').hide(); $('#fin').hide(); $('#Annee').hide(); $('#Id_Client_R').hide();
        break;
        }
}
