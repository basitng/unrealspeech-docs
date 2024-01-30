import{_ as e,c as t,o as i,V as o}from"./chunks/framework.tX0lWPPN.js";const f=JSON.parse('{"title":"Voice Settings","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"synthesis/voice-settings.md","filePath":"synthesis/voice-settings.md"}'),s={name:"synthesis/voice-settings.md"},r=o('<h1 id="voice-settings" tabindex="-1">Voice Settings <a class="header-anchor" href="#voice-settings" aria-label="Permalink to &quot;Voice Settings&quot;">​</a></h1><p>Users have the ability to customize the available voices in order to achieve a desired voice type.</p><h2 id="bitrate" tabindex="-1">Bitrate <a class="header-anchor" href="#bitrate" aria-label="Permalink to &quot;Bitrate&quot;">​</a></h2><p>Dictates the quality of the audio. Higher bitrates produce clearer, more detailed sound but increase file size, making them suitable for high-quality outputs. Lower bitrates are used for smaller files, beneficial for streaming or limited bandwidth scenarios.</p><ul><li><strong>Type</strong>: string</li><li><strong>Optional</strong>: Yes</li><li><strong>Default</strong>: 192k</li><li><strong>Values</strong>: <code>16k, 32k, 48k, 64k, 128k, 192k, 256k, 320k</code></li><li><strong>Note</strong>: Controls the audio quality and file size. Lower bitrate for smaller files and lower quality; higher bitrate for larger files and better quality.</li></ul><h2 id="speed" tabindex="-1">Speed <a class="header-anchor" href="#speed" aria-label="Permalink to &quot;Speed&quot;">​</a></h2><p>Controls how fast or slow the speech is delivered. Faster speeds can convey urgency or excitement, while slower speeds are useful for clarity and emphasis. It&#39;s important for aligning the speech pace with the listener&#39;s preferences or the content&#39;s nature.</p><ul><li><strong>Type</strong>: float</li><li><strong>Optional</strong>: Yes</li><li><strong>Default</strong>: 0</li><li><strong>Range</strong>: -1.0 to 1.0</li><li><strong>Note</strong>: Alters the playback speed of the audio without changing the pitch. Negative values slow down, positive values speed up.</li><li><strong>Examples</strong>: <ul><li><code>0.5</code>: 50% faster (60s audio → 42s)</li><li><code>-0.5</code>: 50% slower (60s audio → 90s)</li></ul></li></ul><h2 id="pitch" tabindex="-1">Pitch <a class="header-anchor" href="#pitch" aria-label="Permalink to &quot;Pitch&quot;">​</a></h2><p>Adjusts the tone of the voice. Higher pitch makes the voice sound lighter and younger, while lower pitch gives a deeper, more mature sound. It&#39;s essential for matching the voice to the context or character being portrayed</p><ul><li><strong>Type</strong>: float</li><li><strong>Optional</strong>: Yes</li><li><strong>Default</strong>: 1.0 (0.92 for male voices on the landing page)</li><li><strong>Range</strong>: <code>0.5 to 1.5</code></li><li><strong>Note</strong>: Adjusts the highness or lowness of the voice tone. Lower values for deeper tones, higher for higher tones. Default for male voices set lower for preference towards deeper voices.</li></ul>',11),a=[r];function l(n,c,h,d,g,u){return i(),t("div",null,a)}const m=e(s,[["render",l]]);export{f as __pageData,m as default};
