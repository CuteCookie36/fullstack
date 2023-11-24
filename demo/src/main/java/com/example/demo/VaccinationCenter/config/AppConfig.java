package com.example.demo.VaccinationCenter.config;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.example.demo.VaccinationCenter.entity.Utilisateur;
import com.example.demo.VaccinationCenter.repository.UtilisateurRepo;

@Configuration
public class AppConfig {


    @Autowired
    private UtilisateurRepo userRepository;


    // @Bean
    // public UserDetailsService userDetailsService() {
    //     return new UserDetailsService() {
    //         @Override
    //         public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
    //             return userRepository.findByLogin(login);
                        
    //         }
    //     };
    // }


    @Bean
    public UserDetailsService userDetailsService() {
        return new UserDetailsService() {
            @Override
            public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
                Optional<Utilisateur> utilisateurOptional = userRepository.findByLogin(login);
            
                return utilisateurOptional.map(utilisateur -> 
                    org.springframework.security.core.userdetails.User
                        .withUsername(utilisateur.getLogin())
                        .password(utilisateur.getPassword())
                        .build())
                    .orElseThrow(() -> new UsernameNotFoundException("Utilisateur non trouvé avec le login: " + login));
        }
        };
    }



    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsService());
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    
}
