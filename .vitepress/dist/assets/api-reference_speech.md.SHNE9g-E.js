import{_ as s,c as i,o as a,V as e}from"./chunks/framework.tX0lWPPN.js";const c=JSON.parse('{"title":"Stream Endpoint","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"api-reference/speech.md","filePath":"api-reference/speech.md"}'),t={name:"api-reference/speech.md"},n=e(`<h1 id="stream-endpoint" tabindex="-1">Stream Endpoint <a class="header-anchor" href="#stream-endpoint" aria-label="Permalink to &quot;Stream Endpoint&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>The UnrealSpeech Stream Endpoint is designed to provide rapid audio synthesis from text input. This POST request endpoint, located at <code>https://api.v6.unrealspeech.com/stream</code>, is capable of processing up to 1000 characters and returning a playback stream of audio within 0.3 seconds. It is ideal for applications requiring the fastest response in audio synthesis.</p><h2 id="endpoint" tabindex="-1">Endpoint <a class="header-anchor" href="#endpoint" aria-label="Permalink to &quot;Endpoint&quot;">​</a></h2><ul><li><strong>Method</strong>: POST</li><li><strong>URL</strong>: <code>https://api.v6.unrealspeech.com/stream</code></li></ul><h2 id="request" tabindex="-1">Request <a class="header-anchor" href="#request" aria-label="Permalink to &quot;Request&quot;">​</a></h2><h3 id="endpoint-specific-body-schema" tabindex="-1">Endpoint-Specific Body Schema <a class="header-anchor" href="#endpoint-specific-body-schema" aria-label="Permalink to &quot;Endpoint-Specific Body Schema&quot;">​</a></h3><p>In addition to common parameters, this endpoint requires the following specific parameters:</p><ol><li><p><strong>Text</strong> (Required)</p><ul><li><strong>Type</strong>: string</li><li><strong>Description</strong>: The text to be synthesized into audio. The text limit is 1000 characters.</li><li><strong>Allowed Values</strong>: Any string up to 1000 characters.</li></ul></li><li><p><strong>Codec</strong> (Optional)</p><ul><li><strong>Type</strong>: string</li><li><strong>Default Value</strong>: libmp3lame</li><li><strong>Allowed Values</strong>: <ul><li><code>pcm_mulaw</code>: Recommended for phone calls.</li><li><code>pcm_s16le</code>: Provides 22050 Hz raw audio.</li><li><code>libmp3lame</code>: Used for MP3 format.</li></ul></li></ul></li><li><p><strong>Temperature</strong> (Optional)</p><ul><li><strong>Type</strong>: float</li><li><strong>Default Value</strong>: 0.25</li><li><strong>Allowed Values</strong>: Ranges from 0.1 to 0.8.</li><li><strong>Description</strong>: Adjusts the audio&#39;s expressiveness and stability. Lower values result in more deterministic and stable audio. Higher values make the audio more expressive and less deterministic, with increased chances of mispronunciation.</li></ul></li></ol><h3 id="authorization" tabindex="-1">Authorization <a class="header-anchor" href="#authorization" aria-label="Permalink to &quot;Authorization&quot;">​</a></h3><ul><li><strong>Type</strong>: Bearer Token</li><li><strong>Value</strong>: Your API Key</li></ul><h3 id="headers" tabindex="-1">Headers <a class="header-anchor" href="#headers" aria-label="Permalink to &quot;Headers&quot;">​</a></h3><ul><li><strong>Authorization</strong>: Bearer <code>&lt;API_KEY&gt;</code></li></ul><h3 id="body" tabindex="-1">Body <a class="header-anchor" href="#body" aria-label="Permalink to &quot;Body&quot;">​</a></h3><ul><li><strong>Type</strong>: raw (JSON)</li></ul><h2 id="example-request" tabindex="-1">Example Request <a class="header-anchor" href="#example-request" aria-label="Permalink to &quot;Example Request&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Xwabn" id="tab-MwHVjxd" checked="checked"><label for="tab-MwHVjxd">curl</label><input type="radio" name="group-Xwabn" id="tab-lpyvR3o"><label for="tab-lpyvR3o">Python</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --location</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;https://api.v6.unrealspeech.com/speech&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">--header </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Authorization: Bearer API_KEY&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">--data </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;Text&quot;: &quot;The milestone Overture 2023-07-26-alpha.0 release includes four unique data layers: Places of Interest (POIs), Buildings, Transportation Network, and Administrative Boundaries. These layers, which combine various sources of open map data, have been validated and conflated through a series of quality checks, and are released in the Overture Maps data schema which was released publicly in June 2023. The Places dataset includes data on over 59 million places worldwide and will be a foundational element of navigation, local search, and many other location-based applications. The datasets are available for download at https://overturemaps.org/download/.&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;VoiceId&quot;: &quot;Scarlett&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;Bitrate&quot;: &quot;320k&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;AudioFormat&quot;: &quot;mp3&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;OutputFormat&quot;: &quot;uri&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;TimestampType&quot;: &quot;sentence&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;sync&quot;: false</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&#39;</span></span></code></pre></div><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> requests</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">url </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;https://api.v6.unrealspeech.com/speech&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">headers </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;Authorization&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Bearer API_KEY&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;Text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;The milestone Overture 2023-07-26-alpha.0 release includes four unique data layers: Places of Interest (POIs), Buildings, Transportation Network, and Administrative Boundaries. These layers, which combine various sources of open map data, have been validated and conflated through a series of quality checks, and are released in the Overture Maps data schema which was released publicly in June 2023. The Places dataset includes data on over 59 million places worldwide and will be a foundational element of navigation, local search, and many other location-based applications. The datasets are available for download at https://overturemaps.org/download/.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;VoiceId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Scarlett&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;Bitrate&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;320k&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;AudioFormat&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mp3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;OutputFormat&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;uri&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;TimestampType&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sentence&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;sync&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">False</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">response </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> requests.post(url, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">headers</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">headers, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">json</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Check response status and content</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> response.status_code </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Success:&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, response.json())</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Error:&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, response.status_code)</span></span></code></pre></div></div></div><p>Response</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;CreationTime&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2023-09-05T14:29:35.89Z&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;OutputUri&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://unreal-tts-live-demo.s3-us-west-1.amazonaws.com/f0280927.mp3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;RequestCharacters&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">656</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;TaskId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;f0280927&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;TaskStatus&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;completed&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;TimestampsUri&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://unreal-tts-live-demo.s3-us-west-1.amazonaws.com/f0280927.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;VoiceId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Scarlett&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,19),l=[n];function h(p,o,r,k,d,u){return a(),i("div",null,l)}const g=s(t,[["render",h]]);export{c as __pageData,g as default};
