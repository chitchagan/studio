import { cn } from "@/lib/utils";

// A component to render a variety of SVG logos.
// As we can't use actual image files, we can define SVG data here
// and render it. This is a good way to have more control over the
// look and feel of the logos.
//
// This is a placeholder for where you would put your own SVG data.
// For now, we'll use a simple circle with the first letter of the tool name.

const LOGO_MAP: Record<string, JSX.Element> = {
    'ChatGPT': <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#74AA9C" /><text x="50%" y="50%" textAnchor="middle" dy=".3em" fill="white" fontSize="40">C</text></svg>,
    'Gemini': <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#8875FF" /><text x="50%" y="50%" textAnchor="middle" dy=".3em" fill="white" fontSize="40">G</text></svg>,
    'Grok': <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#000000" /><text x="50%" y="50%" textAnchor="middle" dy=".3em" fill="white" fontSize="40">G</text></svg>,
    'Make.com': <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#6C36FF" /><text x="50%" y="50%" textAnchor="middle" dy=".3em" fill="white" fontSize="40">M</text></svg>,
    'Claude': <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#D97757" /><text x="50%" y="50%" textAnchor="middle" dy=".3em" fill="white" fontSize="40">C</text></svg>,
    'n8n': <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#0044FF" /><text x="50%" y="50%" textAnchor="middle" dy=".3em" fill="white" fontSize="40">N</text></svg>,
    'Replit': <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#FF7F19" /><text x="50%" y="50%" textAnchor="middle" dy=".3em" fill="white" fontSize="40">R</text></svg>,
    'Cursor': <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#000000" /><text x="50%" y="50%" textAnchor="middle" dy=".3em" fill="white" fontSize="40">C</text></svg>,
    'Lovable': <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#FFC0CB" /><text x="50%" y="50%" textAnchor="middle" dy=".3em" fill="black" fontSize="40">L</text></svg>,
    'Bolt.new': <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#00A3FF" /><text x="50%" y="50%" textAnchor="middle" dy=".3em" fill="white" fontSize="40">B</text></svg>,
    'ElevenLabs': <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#000000" /><text x="50%" y="50%" textAnchor="middle" dy=".3em" fill="white" fontSize="40">E</text></svg>,
    'Krea.ai': <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#000000" /><text x="50%" y="50%" textAnchor="middle" dy=".3em" fill="white" fontSize="40">K</text></svg>,
    'Suno.com': <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#FF69B4" /><text x="50%" y="50%" textAnchor="middle" dy=".3em" fill="white" fontSize="40">S</text></svg>,
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
            <div className={cn("flex items-center justify-center bg-muted rounded-full", className)}>
                <span className="text-lg font-bold text-muted-foreground">{name.charAt(0)}</span>
            </div>
        )
    }

    return (
        <div className={className}>
            {logo}
        </div>
    );
}