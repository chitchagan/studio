import { cn } from "@/lib/utils";

// A component to render a variety of SVG logos.
// As we can't use actual image files, we can define SVG data here
// and render it. This is a good way to have more control over the
// look and feel of the logos.

const LOGO_MAP: Record<string, JSX.Element> = {
    'ChatGPT': <svg viewBox="0 0 41 41"><path fill="#74AA9C" d="M38.22 20.5C38.22 29.87 30.63 37.45 21.26 37.45C16.57 37.45 11.89 35.53 8.65 32.28C8.1 31.73 8.24 30.77 8.87 30.37L11.39 28.57C11.89 28.24 12.63 28.38 12.96 28.88C15.25 31.89 18.26 33.68 21.26 33.68C28.33 33.68 34.45 27.83 34.45 20.5C34.45 13.18 28.33 7.32 21.26 7.32C18.26 7.32 15.25 9.12 12.96 12.12C12.63 12.63 11.89 12.77 11.39 12.44L8.87 10.63C8.24 10.23 8.1 9.27 8.65 8.72C11.89 5.47 16.57 3.55 21.26 3.55C30.63 3.55 38.22 11.13 38.22 20.5Z M29.57 14.57C29.57 16.24 28.23 17.58 26.56 17.58C24.89 17.58 23.55 16.24 23.55 14.57C23.55 12.9 24.89 11.56 26.56 11.56C28.23 11.56 29.57 12.9 29.57 14.57Z M18.44 20.5C18.44 22.17 17.1 23.51 15.43 23.51C13.76 23.51 12.42 22.17 12.42 20.5C12.42 18.83 13.76 17.49 15.43 17.49C17.1 17.49 18.44 18.83 18.44 20.5Z M3.83 20.5C3.83 11.84 10.9 4.77 19.56 4.77C22.67 4.77 25.77 5.73 28.33 7.53L26.56 8.87C24.45 7.42 21.93 6.69 19.56 6.69C12.38 6.69 6.84 12.89 6.84 20.5C6.84 28.11 12.38 34.31 19.56 34.31C21.93 34.31 24.45 33.58 26.56 32.13L28.33 33.47C25.77 35.27 22.67 36.23 19.56 36.23C10.9 36.23 3.83 29.16 3.83 20.5Z M29.57 26.43C29.57 28.1 28.23 29.44 26.56 29.44C24.89 29.44 23.55 28.1 23.55 26.43C23.55 24.76 24.89 23.42 26.56 23.42C28.23 23.42 29.57 24.76 29.57 26.43Z" /></svg>,
    'Gemini': <svg viewBox="0 0 100 100"><defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style={{stopColor: '#8E77FF', stopOpacity: 1}} /><stop offset="100%" style={{stopColor: '#34A853', stopOpacity: 1}} /></linearGradient></defs><path fill="url(#grad1)" d="M50,5 C74.85,5 95,25.15 95,50 C95,74.85 74.85,95 50,95 C25.15,95 5,74.85 5,50 C5,25.15 25.15,5 50,5 Z M50,15 C69.33,15 85,30.67 85,50 C85,69.33 69.33,85 50,85 C30.67,85 15,69.33 15,50 C15,30.67 30.67,15 50,15 Z" /><path fill="url(#grad1)" d="M72.5,35 L62.5,35 L62.5,45 L72.5,45 Z M72.5,55 L62.5,55 L62.5,65 L72.5,65 Z M42.5,27.5 L52.5,27.5 L52.5,72.5 L42.5,72.5 Z M27.5,42.5 L37.5,42.5 L37.5,57.5 L27.5,57.5 Z" /></svg>,
    'Grok': <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-9h4v2h-4v-2zm-3-4l3 3h-3V7zm6 0v3h3l-3-3zM7 15l3-3v3H7zm10 0h-3v-3l3 3z" /></svg>,
    'Make.com': <svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="80" fill="#6C36FF" /><circle cx="65" cy="80" r="18" fill="white" /><circle cx="135" cy="80" r="18" fill="white" /><path d="M 65 110 A 40 40 0 0 0 135 110" stroke="white" strokeWidth="12" fill="none" /></svg>,
    'Claude': <svg viewBox="0 0 100 100"><path d="M50 10 C 20 10, 20 60, 50 60 C 80 60, 80 10, 50 10" fill="#D97757" /><path d="M30 70 C 40 90, 60 90, 70 70" fill="none" stroke="#D97757" strokeWidth="8" strokeLinecap="round" /></svg>,
    'n8n': <svg viewBox="0 0 24 24"><path fill="#0044FF" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M8,11L11,14V8H13V16L16,13V16L12,20L8,16V11Z" /></svg>,
    'Replit': <svg viewBox="0 0 24 24"><path fill="#FF7F19" d="M14 6L13.12 3.28C13.03 3.12 12.87 3 12.71 3H8.29C8.13 3 7.97 3.12 7.88 3.28L7 6H14M16 6H5L3 12L5 18H16L18 12L16 6M13 13V15H8V13H13M14.5 9.5A.5.5 0 0 1 15 10A.5.5 0 0 1 14.5 10.5A.5.5 0 0 1 14 10A.5.5 0 0 1 14.5 9.5M17.29 3H19.71C19.87 3 20.03 3.12 20.12 3.28L21 6H18L17.29 3Z" /></svg>,
    'Cursor': <svg viewBox="0 0 24 24"><path fill="black" d="M10,21V19H6.41L10.91,14.5L9.5,13.09L5,17.59V14H3V21H10M14.5,9.5L13.09,10.91L17.59,15.41V19H19V13H14V14.59L14.5,9.5Z" /></svg>,
    'Lovable': <svg viewBox="0 0 100 100"><path fill="#FFC0CB" d="M50 90 C 20 90, 10 60, 10 40 C 10 20, 30 10, 50 10 C 70 10, 90 20, 90 40 C 90 60, 80 90, 50 90 Z" /><path fill="black" d="M35 40 Q 50 30, 65 40" stroke="black" strokeWidth="4" /><circle cx="35" cy="55" r="5" fill="black" /><circle cx="65" cy="55" r="5" fill="black" /></svg>,
    'Bolt.new': <svg viewBox="0 0 24 24"><path fill="#00A3FF" d="M11 15H6L13 1V9H18L11 23V15Z" /></svg>,
    'ElevenLabs': <svg viewBox="0 0 24 24"><path fill="black" d="M11 4H13V16L11 14V4M9 7H7V13H9V7M5 10H3V16H5V10M15 7H17V13H15V7M19 10H21V16H19V10Z" /></svg>,
    'Krea.ai': <svg viewBox="0 0 100 100"><path fill="black" d="M20 20 L 80 20 L 80 80 L 20 80 Z" /><path fill="white" d="M30 40 L 50 30 L 70 40 L 70 60 L 50 70 L 30 60 Z" /><path fill="black" d="M40 50 L 60 50" stroke="black" strokeWidth="5" /></svg>,
    'Suno.com': <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="#FF69B4" /><path d="M30,60 a1,1 0 0,0 40,0" fill="white" /><circle cx="35" cy="40" r="6" fill="white" /><circle cx="65" cy="40" r="6" fill="white" /></svg>,
}

type LogoDisplayProps = {
    name: string;
    className?: string;
}

export function LogoDisplay({ name, className }: LogoDisplayProps) {
    const logo = LOGO_MAP[name];

    if (!logo) {
        // Fallback for tools without a specific logo
        return (
            <div className={cn("flex items-center justify-center bg-muted rounded-lg", className)}>
                <span className="text-lg font-bold text-muted-foreground">{name.charAt(0)}</span>
            </div>
        )
    }

    return (
        <div className={cn("rounded-lg overflow-hidden", className)}>
            {logo}
        </div>
    );
}
