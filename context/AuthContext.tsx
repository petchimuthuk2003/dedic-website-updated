import React, { createContext, useContext, useEffect, useState } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

interface AuthContextType {
    user: User | null;
    session: Session | null;
    loading: boolean;
    showPhoneModal: boolean;
    setShowPhoneModal: (v: boolean) => void;
    signInWithGoogle: () => Promise<void>;
    signInWithEmail: (email: string, password: string) => Promise<{ error: string | null; user: import('@supabase/supabase-js').User | null }>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState(true);
    const [showPhoneModal, setShowPhoneModal] = useState(false);

    const checkPhoneMissing = async (u: User) => {
        const { data } = await supabase.from('profiles').select('phone').eq('id', u.id).single();
        if (!data?.phone) setShowPhoneModal(true);
    };

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            setUser(session?.user ?? null);
            setLoading(false);
        });

        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
            setSession(session);
            setUser(session?.user ?? null);
            setLoading(false);
            if (event === 'SIGNED_IN' && session?.user?.app_metadata?.provider === 'google') {
                const alreadyChecked = sessionStorage.getItem('phone_checked');
                if (!alreadyChecked) {
                    sessionStorage.setItem('phone_checked', '1');
                    checkPhoneMissing(session.user);
                }
            }
            if (event === 'SIGNED_OUT') {
                sessionStorage.removeItem('phone_checked');
            }
        });

        return () => subscription.unsubscribe();
    }, []);

    const signInWithEmail = async (email: string, password: string) => {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        return { error: error?.message ?? null, user: data?.user ?? null };
    };

    const signInWithGoogle = async () => {
        await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: { redirectTo: window.location.origin + '/dashboard' },
        });
    };

    const signOut = async () => {
        await supabase.auth.signOut();
    };

    return (
        <AuthContext.Provider value={{ user, session, loading, showPhoneModal, setShowPhoneModal, signInWithGoogle, signInWithEmail, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
