package com.classrooms.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
@Configuration
//@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter{
	
//	@Autowired
//	private UserDetailsService userDetailsService;
//	@Autowired
//	private BCryptPasswordEncoder bCryptPasswordEncoder ;
	
	  @Override
	    protected void configure(AuthenticationManagerBuilder auth) throws Exception{
	        //auth.authenticationProvider(authenticationProvider());
	/*	  auth.inMemoryAuthentication().withUser("ali").password("ali").roles("user")
		  .and().withUser("youssef").password("youssef").roles("admin","user");*/
		  
//		  auth.userDetailsService(userDetailsService)
//          .passwordEncoder(bCryptPasswordEncoder);
		  
	    }
	
	   @Override
	    protected void configure(HttpSecurity http) throws Exception {
	        http .csrf().disable();
	       // http.formLogin();
	        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
	        http.authorizeRequests().antMatchers("/login/**", "/index.html").permitAll();
	        //http.authorizeRequests().antMatchers(HttpMethod.GET,"/classes").hasAuthority("admin");
	        http.authorizeRequests().antMatchers(HttpMethod.GET,"/classes").permitAll();
	        http.authorizeRequests().antMatchers(HttpMethod.POST,"/classe").permitAll();
//	        http.authorizeRequests().antMatchers(HttpMethod.POST,"/upload").permitAll();
//	        http.authorizeRequests().antMatchers(HttpMethod.GET,"/rooms").hasAuthority("admin");
	       // http.authorizeRequests().anyRequest().authenticated();
//	        http .addFilter(new JwtAuthenticationFilter(authenticationManager()));
	//        http.addFilterBefore(new JwtAuthorizationFilter(), UsernamePasswordAuthenticationFilter.class);
	   
	   
	   }  
	  
	  
	  
	  
	

}