import{_ as s,c as i,o as a,V as e}from"./chunks/framework.tX0lWPPN.js";const E=JSON.parse('{"title":"Stream Endpoint","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"api-reference/stream.md","filePath":"api-reference/stream.md"}'),t={name:"api-reference/stream.md"},n=e(`<h1 id="stream-endpoint" tabindex="-1">Stream Endpoint <a class="header-anchor" href="#stream-endpoint" aria-label="Permalink to &quot;Stream Endpoint&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>The UnrealSpeech Stream Endpoint is designed to provide rapid audio synthesis from text input. This POST request endpoint, located at <code>https://api.v6.unrealspeech.com/stream</code>, is capable of processing up to 1000 characters and returning a playback stream of audio within 0.3 seconds. It is ideal for applications requiring the fastest response in audio synthesis.</p><h2 id="endpoint" tabindex="-1">Endpoint <a class="header-anchor" href="#endpoint" aria-label="Permalink to &quot;Endpoint&quot;">​</a></h2><ul><li><strong>Method</strong>: POST</li><li><strong>URL</strong>: <code>https://api.v6.unrealspeech.com/stream</code></li></ul><h2 id="request" tabindex="-1">Request <a class="header-anchor" href="#request" aria-label="Permalink to &quot;Request&quot;">​</a></h2><h3 id="endpoint-specific-body-schema" tabindex="-1">Endpoint-Specific Body Schema <a class="header-anchor" href="#endpoint-specific-body-schema" aria-label="Permalink to &quot;Endpoint-Specific Body Schema&quot;">​</a></h3><p>In addition to common parameters, this endpoint requires the following specific parameters:</p><ol><li><p><strong>Text</strong> (Required)</p><ul><li><strong>Type</strong>: string</li><li><strong>Description</strong>: The text to be synthesized into audio. The text limit is 1000 characters.</li><li><strong>Allowed Values</strong>: Any string up to 1000 characters.</li></ul></li><li><p><strong>Codec</strong> (Optional)</p><ul><li><strong>Type</strong>: string</li><li><strong>Default Value</strong>: libmp3lame</li><li><strong>Allowed Values</strong>: <ul><li><code>pcm_mulaw</code>: Recommended for phone calls.</li><li><code>pcm_s16le</code>: Provides 22050 Hz raw audio.</li><li><code>libmp3lame</code>: Used for MP3 format.</li></ul></li></ul></li><li><p><strong>Temperature</strong> (Optional)</p><ul><li><strong>Type</strong>: float</li><li><strong>Default Value</strong>: 0.25</li><li><strong>Allowed Values</strong>: Ranges from 0.1 to 0.8.</li><li><strong>Description</strong>: Adjusts the audio&#39;s expressiveness and stability. Lower values result in more deterministic and stable audio. Higher values make the audio more expressive and less deterministic, with increased chances of mispronunciation.</li></ul></li></ol><h3 id="authorization" tabindex="-1">Authorization <a class="header-anchor" href="#authorization" aria-label="Permalink to &quot;Authorization&quot;">​</a></h3><ul><li><strong>Type</strong>: Bearer Token</li><li><strong>Value</strong>: Your API Key</li></ul><h3 id="headers" tabindex="-1">Headers <a class="header-anchor" href="#headers" aria-label="Permalink to &quot;Headers&quot;">​</a></h3><ul><li><strong>Authorization</strong>: Bearer <code>&lt;API_KEY&gt;</code></li></ul><h3 id="body" tabindex="-1">Body <a class="header-anchor" href="#body" aria-label="Permalink to &quot;Body&quot;">​</a></h3><ul><li><strong>Type</strong>: raw (JSON)</li></ul><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-8XgLn" id="tab-rWDldhL" checked="checked"><label for="tab-rWDldhL">curl</label><input type="radio" name="group-8XgLn" id="tab-XI0xKu-"><label for="tab-XI0xKu-">Python</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --location</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;https://api.v6.unrealspeech.com/stream&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">--header </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Authorization: Bearer API_KEY&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">--data </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;Text&quot;: &quot;Amid the intricate labyrinth of human neurons lies a molecule that has confounded and fascinated scientists for ages: the neurotransmitter known as dopamine. Often heralded as the pleasure molecule, dopamine&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;s role is far more nuanced than just mediating euphoria.&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;VoiceId&quot;: &quot;Scarlett&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;Bitrate&quot;: &quot;192k&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;Pitch&quot;: 1.0,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;Speed&quot;: 0</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&#39;</span></span></code></pre></div><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> requests</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">url </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;https://api.v6.unrealspeech.com/stream&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">headers </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;Authorization&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Bearer API_KEY&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;Text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Amid the intricate labyrinth of human neurons lies a molecule that has confounded and fascinated scientists for ages: the neurotransmitter known as dopamine. Often heralded as the pleasure molecule, dopamine&#39;s role is far more nuanced than just mediating euphoria.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;VoiceId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Scarlett&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;Bitrate&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;192k&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;Pitch&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;Speed&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">response </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> requests.post(url, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">headers</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">headers, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">json</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Check response status and content</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> response.status_code </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Success:&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, response.json())</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Error:&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, response.status_code)</span></span></code></pre></div></div></div><p>Resonse</p><h4 id="the-response-type-is-a-buffer-it-returns-a-playable" tabindex="-1"><code>The response type is a buffer, it returns a playable</code> <a class="header-anchor" href="#the-response-type-is-a-buffer-it-returns-a-playable" aria-label="Permalink to &quot;\`The response type is a buffer, it returns a playable\`&quot;">​</a></h4>`,18),l=[n];function h(p,r,o,d,k,c){return a(),i("div",null,l)}const g=s(t,[["render",h]]);export{E as __pageData,g as default};
