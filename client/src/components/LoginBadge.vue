<script setup lang="ts">
    import { ref } from 'vue';
    import { useSession , login, useLogout} from '@/model/session';

    const session = useSession();
	const logout = useLogout();

	function logout2() {
		logout();
	}
</script>

<template>

    <div class="navbar-item" v-if="session.user">
        Wecome, {{  session.user.name }}
        (<a @click="logout2()">logout</a>)
	</div>
	<div class="navbar-item" v-else="!session.user">
		<a href="#" class="button is-primary" @click="login">
			<span class="icon">
				<i class="fas fa-user"></i>
			</span>
			<strong>Log In</strong>
		</a>

		<a href="#" class="button is-light">
			<span class="icon">
				<i class="fas fa-user-plus"></i>
			</span>
			<strong>Sign Up</strong>
		</a>
	</div>

			
</template>


<style scoped>

</style>