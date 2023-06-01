var Email = /** @class */ (function () {
    function Email(from, to, subject, message) {
        this._from = from;
        this._to = to;
        this._message = message;
        this.subject = subject;
    }
    Object.defineProperty(Email.prototype, "subject", {
        get: function () {
            return this._subject || '';
        },
        set: function (newSubject) {
            if (newSubject.length <= 40)
                this._subject = newSubject;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Email.prototype, "from", {
        get: function () { return this._from; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Email.prototype, "to", {
        get: function () { return this._to; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Email.prototype, "content", {
        get: function () {
            return "\n      From " + this._from + " to " + this._to + "\n      " + this.subject + "\n  \n      " + this._message;
        },
        enumerable: false,
        configurable: true
    });
    return Email;
}());
var MailList = /** @class */ (function () {
    // Essa sintaxe no construtor é chamada `Parameter Properties`
    // É um atalho para declarar e automaticamente atribuir o valor que será recebido via parâmetro ao atributo privado `mailList`
    function MailList(mailList) {
        if (mailList === void 0) { mailList = []; }
        this.mailList = mailList;
    }
    Object.defineProperty(MailList.prototype, "all", {
        get: function () { return this.mailList; },
        enumerable: false,
        configurable: true
    });
    MailList.prototype.getEmailsBySender = function (mailAddress) {
        return this.mailList.filter(function (mail) { return mail.from === mailAddress; });
    };
    MailList.prototype.getEmailsTo = function (mailAddress) {
        return this.mailList.filter(function (mail) { return mail.to === mailAddress; });
    };
    MailList.prototype.getEmailsBySubject = function (searchString) {
        return this.mailList
            .filter(function (mail) { return mail.subject.indexOf(searchString) !== -1; });
    };
    MailList.prototype.addEmail = function (newMail) { this.mailList.push(newMail); };
    MailList.prototype.removeEmail = function (mailToRemove) {
        // note que como essa é uma comparação de objetos, esse filter só funcionará se a referência de `mail` e `mailToRemove` for a mesma
        this.mailList = this.mailList.filter(function (mail) { return mail !== mailToRemove; });
    };
    return MailList;
}());
