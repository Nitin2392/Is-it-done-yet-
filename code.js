const iFrameProps = {
    width: 260,
    height: 300
};
const setStatusColor = (statusType) => {
    var emojiHex = "";
    switch (statusType) {
        case "Active":
            emojiHex = "\uD83D\uDD35";
            break;
        case "Approved":
            emojiHex = "\uD83D\uDFE2";
            break;
        case "In-development":
            emojiHex = "\uD83D\uDFE3";
            break;
        case "In-review":
            emojiHex = "\uD83D\uDFE1";
            break;
        case "Needs changes":
            emojiHex = "\uD83D\uDD34";
            break;
    }
    return emojiHex;
};
figma.showUI(__html__, iFrameProps);
figma.ui.onmessage = (param) => {
    if (param.type === "apply_status") {
        figma.currentPage.selection.forEach(node => {
            node.name =
                setStatusColor(param.message.status) +
                    param.message.status +
                    " " +
                    param.message.ticketNumber;
        });
    }
    figma.closePlugin();
    figma.notify("Status updated for selected frames successfully");
};
