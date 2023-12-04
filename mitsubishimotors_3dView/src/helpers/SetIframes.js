function SetIframes() {

    const iframeDiv = $('.iframe-div');

    const iframeGradient = $('<div>').addClass('iframe-gradient');

    const iframeMask = $('<div>')
        .addClass('iframe-mask')
        .attr('id', 'iframe-mask');

    const iframeLoader = $('<div>')
        .addClass('iframe-loader')
        .attr('id', 'iframe-loader')
        .text('carregando 0%...');

    const iframeContainer = $('<div>').addClass('iframe-container');

    const iframe = $('<iframe>').attr({
        'src': '',
        'id': 'api-frame',
        'sandbox': 'allow-scripts allow-same-origin allow-popups allow-forms',
        'allow': 'autoplay; fullscreen;',
        'mozallowfullscreen': 'true',
        'webkitallowfullscreen': 'true'
    });

    iframeContainer.append(iframe);
    iframeDiv.append(iframeGradient, iframeMask, iframeLoader, iframeContainer);
};

export default SetIframes;